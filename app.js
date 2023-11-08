import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { postsRouter } from "./routes/post-routes.js";

const app = express();

// Middlewares

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.use("/posts", postsRouter);

import { env } from "./settings/envs.js";

app.listen(env.PORT, () => {
  console.log(`server on  port ${env.PORT}`);
});
