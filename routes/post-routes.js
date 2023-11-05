import { Router } from "express";

const postsRouter = Router();

import {
  ctrlCreatePost,
  ctrlGetAllPost,
} from "../controllers/post-controller.js";

postsRouter.get("/", ctrlGetAllPost);

postsRouter.post("/", ctrlCreatePost);

postsRouter.patch("/", ctrlCreatePost);

postsRouter.delete("/", ctrlCreatePost);

export { postsRouter };
