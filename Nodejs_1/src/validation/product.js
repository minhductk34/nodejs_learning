import Joi from "joi";
export const productValid = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
  categoriesId: Joi.string().required(),
});
