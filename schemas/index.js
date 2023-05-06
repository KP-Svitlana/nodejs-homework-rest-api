const { addSchema } = require("./addSchema");
const { updateFavoriteSchema } = require("./updateFavoriteSchema");

const joiSchemas = { addSchema, updateFavoriteSchema };

module.exports = { joiSchemas };
