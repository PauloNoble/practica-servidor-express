import { Router } from "express";
const postsRouter = Router();

import {
  ctrlCreatePost,
  ctrlGetAllPost,
  ctrlGetPostById,
} from "../controllers/post-controller.js";

import { createPostValidations } from "../validations/create-post-validations.js";
import { applyValidations } from "../middlewares/applyValidations.js";
import { findPostValidation } from "../validations/find-post-validations.js";

postsRouter.get("/", ctrlGetAllPost);

postsRouter.post("/", createPostValidations, applyValidations, ctrlCreatePost);

postsRouter.get("/:postId", findPostValidation, ctrlGetPostById);

postsRouter.patch("/", ctrlCreatePost);

postsRouter.delete("/", ctrlCreatePost);

export { postsRouter };
