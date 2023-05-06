const Joi = require("joi");
const { HttpError } = require("../helpers");

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .error(HttpError(400, "missing field favorite")),
});

module.exports = { updateFavoriteSchema };
