import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { validatePost } from "./middlewares/validations.js";

import { postsRouter } from "./routes/post-routes.js";

const app = express();

// Middlewares

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// app.use(validatePost);

app.use("/posts", postsRouter);

app.listen(4000, () => {
  console.log("Servidor escuchando en puerto 4000");
});
