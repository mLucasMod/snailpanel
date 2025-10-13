import { Config } from "@snail/utils";
import { Request, Router } from "express";
import jwt from "jsonwebtoken";
import { createRoute } from "../../router";
import { UserController } from "../user/user.controller";

const authRoutes = Router();

createRoute(authRoutes, {
    method: "GET",
    path: "/",
    auth: false,
    handler: async (req, res) => {
        const user = await getJwtUser(req);
        res.json({
            authenticated: !!user,
            user: user?.username ?? null
        });
    }
});

async function getJwtUser(req: Request) {
    const token = req.cookies?.jwt;
    if (!token) return null;

    try {
        const user = jwt.verify(token, Config.api.jwt?.secret ?? "") as { id: number };
        const userCtrl = new UserController(req.db);
        return userCtrl.findUserById(user.id);
    } catch {
        return null;
    }
}

createRoute(authRoutes, {
    method: "POST",
    path: "/",
    auth: false,
    handler: async (req, res, next) => {
        const { login, password } = req.body;
        if (!login || !password) {
            return next(400);
        }

        const userCtrl = new UserController(req.db);
        const user = await userCtrl.findUserByLogin(login);

        if (!user) {
            return next(401);
        }

        const jwtConfig = Config.api.jwt;
        const token = jwt.sign({ id: user.id }, jwtConfig?.secret ?? "", { expiresIn: jwtConfig?.expiresIn ?? "1h" });

        const cookieConfig = Config.api.cookie;
        res.cookie("jwt", token, {
            httpOnly: cookieConfig?.httpOnly ?? true,
            secure: cookieConfig?.secure ?? true,
            sameSite: cookieConfig?.sameSite ?? "strict",
            maxAge: cookieConfig?.maxAge ?? 3600000
        });

        res.status(204).json();
    }
});

createRoute(authRoutes, {
    method: "DELETE",
    path: "/",
    auth: false,
    handler: (req, res) => {
        res.clearCookie("jwt");
        res.status(204).json();
    }
});

export default authRoutes;
