import { Database, DatabaseInstance } from "@snail/utils";
import { NextFunction, Request, RequestHandler, Response } from "express";

declare global {
    namespace Express {
        interface Request {
            db: DatabaseInstance;
        }
    }
}

export default function database(): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.db = await Database.getInstance();
            next();
        } catch (error) {
            const err = error as Error;
            next({
                name: err.name,
                message: err.message
            });
        }
    };
}
