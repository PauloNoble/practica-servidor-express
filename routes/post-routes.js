import { Router } from "express";
const postsRouter = Router();

import {
  ctrlGetAllPost,
  ctrlCreatePost,
  ctrlGetPostById,
  ctrlUpdatePost,
  ctrlDeletePost,
} from "../controllers/post-controller.js";

import { createPostValidations } from "../validations/create-post-validations.js";
import { applyValidations } from "../middlewares/applyValidations.js";
import { findPostValidation } from "../validations/find-post-validations.js";
import { updatePostValidations } from "../validations/update-post-validations.js";

postsRouter.get("/", ctrlGetAllPost);

postsRouter.post("/", createPostValidations, applyValidations, ctrlCreatePost);

postsRouter.get("/:postId", findPostValidation, ctrlGetPostById);

postsRouter.patch(
  "/:postId",
  updatePostValidations,
  applyValidations,
  ctrlUpdatePost
);

postsRouter.delete(
  "/:postId",
  findPostValidation,
  applyValidations,
  ctrlDeletePost
);

export { postsRouter };
