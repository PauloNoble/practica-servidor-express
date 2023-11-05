import { body } from "express-validator";

export const createPostValidations = [
  body("title")
    .notEmpty()
    .withMessage("Property title is requiered")
    .isString()
    .withMessage("Property title must be string"),
  body("desc")
    .notEmpty()
    .withMessage("Property desc is requiered")
    .isString()
    .withMessage("Property desc must be string"),
  body("image")
    .notEmpty()
    .withMessage("Property title is requiered")
    .isURL()
    .withMessage("Property image must be URL"),
  /*body("email")
    .notEmpty()
    .withMessage("Property email is required")
    .isEmail()
    .withMessage("Property email invalid"),
  body("password").notEmpty().isStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  }),*/
];
