import { RequestHandler, Router } from "express";
import authentication from "./middlewares/authentication";
import authorization from "./middlewares/authorization";
import paramValidation from "./middlewares/param-validation";

interface BaseRouteOptions {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    path: string | string[];
    validate?: Record<string, RegExp>;
    handler: RequestHandler;
}

interface AuthRouteOptions extends BaseRouteOptions {
    auth: true;
    permissions?: string[];
}

interface PublicRouteOptions extends BaseRouteOptions {
    auth?: false;
}

export type RouteOptions = AuthRouteOptions | PublicRouteOptions;

export function createRoute(router: Router, options: RouteOptions) {
    const middlewares: RequestHandler[] = [];

    if (options.validate) {
        middlewares.push(paramValidation(options.validate));
    }

    if (options.auth) {
        middlewares.push(authentication());

        if (options.permissions && options.permissions.length > 0) {
            middlewares.push(authorization(options.permissions));
        }
    }

    (router as any)[options.method.toLowerCase()](
        options.path,
        ...middlewares,
        options.handler
    );
}
