import { HttpError } from "@snail/utils";
import { NextFunction, Request, Response } from "express";

function httpError(res: Response, status: number, error: string, message?: string) {
    const body: any = { status, error };
    if (message) body.message = message;
    return res.status(status).json(body);
}

export default function errorHandler() {
    return (err: HttpError | string | number, req: Request, res: Response, next: NextFunction) => {
        let status = 500;
        let message: string | undefined = undefined;
        let name: string | undefined = undefined;

        if (typeof err === "string") {
            name = err;
        } else if (typeof err === "number") {
            status = err;
        } else {
            status = err.status ?? 500;
            message = err.message;
            name = err.name;
        }

        switch (status) {
            case 400:
                return httpError(res, 400, "BAD_REQUEST", message);
            case 401:
                return httpError(res, 401, "UNAUTHORIZED", message);
            case 403:
                return httpError(res, 403, "FORBIDDEN", message);
            case 404:
                return httpError(res, 404, "NOT_FOUND", message);
            case 405:
                return httpError(res, 405, "METHOD_NOT_ALLOWED", message);
            case 409:
                return httpError(res, 409, "CONFLICT", message);
            case 422:
                return httpError(res, 422, "UNPROCESSABLE_ENTITY", message);
            case 501:
                return httpError(res, 501, "NOT_IMPLEMENTED", message);
            default:
                return httpError(res, 500, name || "INTERNAL_SERVER_ERROR", message);
        }
    };
}
