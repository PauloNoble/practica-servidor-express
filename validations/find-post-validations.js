import { param } from "express-validator";

export const findPostValidation = [
  param("postId").isNumeric().withMessage("Id must be a number").toInt(),
];
