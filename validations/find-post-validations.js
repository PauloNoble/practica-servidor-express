import { param } from "express-validator";

export const findPostValidation = [
  param("postId").isNumeric().withMessage("id must be numeric").toInt(),
];
