import Joi from "joi";
export const categoriesValid = Joi.object({
  name: Joi.string().required(),
  slug: Joi.number().required(),
});
