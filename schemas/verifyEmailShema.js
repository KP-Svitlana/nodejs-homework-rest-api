const Joi = require("joi");

const verifyEmailSchema = Joi.object({
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
});

module.exports = { verifyEmailSchema };
