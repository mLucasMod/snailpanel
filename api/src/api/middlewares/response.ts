import { NextFunction, Request, RequestHandler, Response } from "express";

declare global {
    namespace Express {
        interface Response {
            respond: (data: any) => void;
        }
    }
}

export default function response(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        res.respond = (data: any): Response => res.json({
            status: res.statusCode,
            payload: data
        });
        next();
    };
}
