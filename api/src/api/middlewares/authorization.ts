import { NextFunction, Request, RequestHandler, Response } from "express";

export default function authorization(permissions: string[]): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        // TODO permission check
        next();
    };
}
