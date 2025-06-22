import { HttpErrorResponse } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";
import { ApiErrorResponse } from "./api-error-response";
import { apiEvents } from "./api-events";
import { ApiResponse } from "./api-response";

// handle api response
export const consumeApi = <T>() => {
    return (source: Observable<ApiResponse<T>>) => {
        return source.pipe(
            map((response: ApiResponse<T>) => consumeApiResponse<T>(response)),
            catchError((error: any) => consumeApiError(error))
        );
    }
}

// handle successful response
function consumeApiResponse<T>(response: ApiResponse<T>): T {
    return response.payload;
}

// handle error response
function consumeApiError(error: any): Observable<never> {
    if (isHttpErrorResponse(error) && isApiErrorResponse(error.error)) {
        // server returned an error response
        apiEvents.newErrorToConsume$.next(error.error);
    } else {
        // server is unreachable
    }
    return throwError(() => error);
}

function isHttpErrorResponse(x: unknown): x is HttpErrorResponse {
    return x instanceof HttpErrorResponse;
}

function isApiErrorResponse(x: unknown): x is ApiErrorResponse {
    return typeof x === "object"
        && x !== null
        && hasApiErrorResponseKeys(x)
        && typeof x.status === "number"
        && typeof x.error === "string";
}

function hasApiErrorResponseKeys(x: object): x is Record<keyof ApiErrorResponse, unknown> {
    return "error" in x
        && "status" in x;
}
