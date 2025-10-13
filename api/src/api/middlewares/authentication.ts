import { Config } from "@snail/utils";
import { NextFunction, Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../app/user/user";
import { UserController } from "../app/user/user.controller";

declare global {
    namespace Express {
        interface Request {
            user: User;
        }
    }
}

export default function authentication(): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = req.cookies?.jwt;

        if (!token) {
            return next({ status: 401, message: "TOKEN_MISSING" });
        }

        try {
            const cookie = jwt.verify(token, Config.api.jwt?.secret ?? "") as { id: number };
            const userCtrl = new UserController(req.db);
            const user = await userCtrl.findUserById(cookie.id);

            if (user) {
                req.user = user; 
                next();
            } else {
                next({ status: 401, message: "INVALID_TOKEN" });
            }

        } catch (error: any) {
            if (error.name === "TokenExpiredError") {
                return next({ status: 401, message: "TOKEN_EXPIRED" });
            }
            return next({ status: 401, message: "INVALID_TOKEN" });
        }
    };
}
