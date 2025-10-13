import { NextFunction, Request, RequestHandler, Response } from "express";

export default function paramValidation(validate: Record<string, RegExp>): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        for (const [param, regex] of Object.entries(validate ?? [])) {
            if (!regex.test(req.params[param])) {
                next(404);
            }
        }
        next();
    };
}
