import { body, param } from "express-validator";

export const updatePostValidations = [
  param("postId").isNumeric().withMessage("id must be numeric").toInt(),
  body("title")
    .optional()
    .isString()
    .withMessage("Property title must be string"),
  body("desc")
    .optional()
    .isString()
    .withMessage("Property desc must be string"),
  body("image").optional().isURL().withMessage("Property image must be URL"),
];
