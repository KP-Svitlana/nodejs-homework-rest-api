const Joi = require("joi");
const { HttpError } = require("../helpers");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  phone: Joi.string()
    .regex(/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .error(HttpError(400, "missing field favorite")),
});

module.exports = { addSchema, updateFavoriteSchema };
