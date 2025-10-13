import { Logger } from "@snail/utils";
import { NextFunction, Request, RequestHandler, Response } from "express";

declare global {
    namespace Express {
        interface Request {
            logger: Logger;
        }
    }
}

export default function logger(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        req.logger = new Logger();
        
        const start = new Date();
        res.on("finish", () => {
            const timestamp = start.toLocaleString();
            const duration = new Date().getTime() - start.getTime();
            const user = req.user?.id ?? "unknown";
            console.log(`[${timestamp}] ${res.statusCode} ${req.method} ${req.originalUrl} (${duration}ms) ip=${req.ip} user=${user}\n${req.logger.dump()}`);
        });

        next();
    };
}
