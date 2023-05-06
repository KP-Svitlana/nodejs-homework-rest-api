const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string()
    .regex(/^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/)
    .required(),
});

module.exports = { authSchema };
