import { Router } from "express";
const postsRouter = Router();

import {
  ctrlCreatePost,
  ctrlGetAllPost,
} from "../controllers/post-controller.js";

import { createPostValidations } from "../validations/create-post-validations.js";
import { applyValidations } from "../middlewares/applyValidations.js";

postsRouter.get("/", ctrlGetAllPost);

postsRouter.post("/", createPostValidations, applyValidations, ctrlCreatePost);

postsRouter.patch("/", ctrlCreatePost);

postsRouter.delete("/", ctrlCreatePost);

export { postsRouter };
