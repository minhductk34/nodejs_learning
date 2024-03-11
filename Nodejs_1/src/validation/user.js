import Joi from "joi";
export const signUpValidator = Joi.object({
  userName: Joi.string().required().min(5).max(255).messages({
    "string.empty": "User cannot be empty",
    "any.required": "User must be required",
    "any.min": "User must be at least 5 characters",
    "any.max": "User must be at most 255 characters",
  }),
  email: Joi.string().required().email().messages({
    "string.empty": "Email cannot be empty",
    "any.required": "Email must be required",
    "string.email": "Email must be correct format",
  }),
  password: Joi.string().required().min(5).max(255).messages({
    "string.empty": "Password cannot be empty",
    "any.required": " Password must be required",
    "any.min": "Password must be at least 5 characters",
    "any.max": "Password must be at most 255 characters",
  }),
  confirmPassword: Joi.string()
    .required()
    .min(5)
    .max(255)
    .valid(Joi.ref("password"))
    .messages({
      "string.empty": "Password cannot be empty",
      "any.required": " Password must be required",
      "any.min": "Password must be at least 5 characters",
      "any.max": "Password must be at most 255 characters",
      "any.only": "Confirm password must be same as password",
    }),
    
  role: Joi.string(),
});
export const signInValidator = Joi.object({
  email: Joi.string().required().email().messages({
    "string.empty": "Email cannot be empty",
    "any.required": "Email must be required",
    "string.email": "Email must be correct format",
  }),
  password: Joi.string().required().min(5).max(255).messages({
    "string.empty": "Password cannot be empty",
    "any.required": " Password must be required",
    "any.min": "Password must be at least 5 characters",
    "any.max": "Password must be at most 255 characters",
  }),
});
