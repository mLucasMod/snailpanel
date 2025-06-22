import { Subject } from "rxjs";
import { ApiErrorResponse } from "./api-error-response";

export const apiEvents = {
    newErrorToConsume$: new Subject<ApiErrorResponse>()
}
