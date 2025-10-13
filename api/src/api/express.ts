import cookieParser from "cookie-parser";
import express from "express";
import cors from "./middlewares/cors";
import database from "./middlewares/database";
import errorHandler from "./middlewares/error-handler";
import logger from "./middlewares/logger";
import routes from "./routes";

const app = express();

app.set("etag", false);
app.set("trust proxy", true);

app.use(express.json());
app.use(cookieParser());

app.use(cors());
app.use(logger());
app.use(database());
app.use(routes);
app.use(errorHandler());

export default app;
