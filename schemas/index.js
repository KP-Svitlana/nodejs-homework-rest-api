const { addSchema } = require("./addSchema");
const { updateFavoriteSchema } = require("./updateFavoriteSchema");
const { authSchema } = require("./authSchema");

const joiSchemas = { addSchema, updateFavoriteSchema, authSchema };

module.exports = { joiSchemas };
