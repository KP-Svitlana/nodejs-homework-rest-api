const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  phone: Joi.string()
    .regex(/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
  favorite: Joi.boolean(),
});

module.exports = { addSchema };
