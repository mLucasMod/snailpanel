import { createRoute } from "api/router";
import { Router } from "express";

const serverRoutes = Router();

// get servers
createRoute(serverRoutes, {
    method: "GET",
    path: "/",
    auth: true,
    handler: (req, res, next) => {
        next(501);
    }
});

// create a server
createRoute(serverRoutes, {
    method: "POST",
    path: "/",
    auth: true,
    handler: (req, res, next) => {
        next(501);
    }
});

// get a server
createRoute(serverRoutes, {
    method: "GET",
    path: "/:id",
    validate: { id: /^\d+$/ },
    auth: true,
    handler: (req, res, next) => {
        next(501);
    }
});

// update a server
createRoute(serverRoutes, {
    method: "PUT",
    path: "/:id",
    validate: { id: /^\d+$/ },
    auth: true,
    handler: (req, res, next) => {
        next(501);
    }
});

// delete a server
createRoute(serverRoutes, {
    method: "DELETE",
    path: "/:id",
    validate: { id: /^\d+$/ },
    auth: true,
    handler: (req, res, next) => {
        next(501);
    }
});

export default serverRoutes;
