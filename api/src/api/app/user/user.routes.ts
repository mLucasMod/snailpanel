import { Router } from "express";
import { createRoute } from "../../router";
import { UserController } from "./user.controller";

const userRoutes = Router();

// get users
createRoute(userRoutes, {
    method: "GET",
    path: "/",
    auth: true,
    handler: async (req, res) => {
        const userCtrl = new UserController(req.db);
        const users = await userCtrl.getAllUsers();
        res.json(users);
    }
});

// create a user
createRoute(userRoutes, {
    method: "POST",
    path: "/",
    auth: true,
    handler: async (req, res, next) => {
        const { username, email, password } = req.body ?? {};

        if (!username || !email || !password) {
            return next(400);
        }

        const userCtrl = new UserController(req.db);
        const user = await userCtrl.findUserByUsernameOrEmail(username, email);

        if (user) {
            return next(409);
        }

        await userCtrl.createUser(username, email, password);
        res.status(201).json();
    }
});

// get a user
createRoute(userRoutes, {
    method: "GET",
    path: "/:id",
    validate: { id: /^\d+$/ },
    auth: true,
    handler: async (req, res, next) => {
        const userCtrl = new UserController(req.db);
        const user = await userCtrl.findUserById(parseInt(req.params.id));

        if (!user) {
            return next(404);
        }

        res.json(user);
    }
});

// update a user
createRoute(userRoutes, {
    method: "PUT",
    path: "/:id",
    validate: { id: /^\d+$/ },
    auth: true,
    handler: async (req, res, next) => {
        const { username, email } = req.body ?? {};

        if (!username || !email) {
            return next(400);
        }

        const userCtrl = new UserController(req.db);
        const user = await userCtrl.findUserById(parseInt(req.params.id));

        if (!user) {
            return next(404);
            
        }

        await userCtrl.updateUser({ ...user, username, email });
        res.status(204).json();
    }
});

// update a user password
createRoute(userRoutes, {
    method: "PATCH",
    path: "/:id",
    validate: { id: /^\d+$/ },
    auth: true,
    handler: async (req, res, next) => {
        const { password } = req.body ?? {};

        if (!password) {
            return next(400);
        }

        const userCtrl = new UserController(req.db);
        await userCtrl.updateUserPassword(parseInt(req.params.id), password);

        res.status(204).json();
    }
});

// delete a user
createRoute(userRoutes, {
    method: "DELETE",
    path: "/:id",
    validate: { id: /^\d+$/ },
    auth: true,
    handler: async (req, res, next) => {
        const userCtrl = new UserController(req.db);
        const user = await userCtrl.findUserById(parseInt(req.params.id));

        if (!user) {
            return next(404);
        }

        if (user.id === req.user.id) {
            return next(403);
        }

        await userCtrl.deleteUser(user.id);
        res.status(204).json();
    }
});

export default userRoutes;
