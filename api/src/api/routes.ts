import { Router } from "express";
import path from "path";
import authRoutes from "./app/auth/auth.routes";
import serverRoutes from "./app/server/server.routes";
import userRoutes from "./app/user/user.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/servers", serverRoutes);

router.get("/favicon.ico", (req, res) => {
    const iconPath = path.join(__dirname, "static", "favicon.ico");
    res.sendFile(iconPath);
});

router.use((req, res, next) => next({ status: 404 }));

export default router;
