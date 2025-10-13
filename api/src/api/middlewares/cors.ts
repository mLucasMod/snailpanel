import baseCors from "cors";
import { RequestHandler } from "express";

export default function cors(): RequestHandler {
    return baseCors({
        credentials: true,
        origin: ["http://localhost:4200"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
    });
}
