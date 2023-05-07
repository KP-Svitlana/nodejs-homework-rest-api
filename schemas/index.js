const { addSchema } = require("./addSchema");
const { updateFavoriteSchema } = require("./updateFavoriteSchema");
const { authSchema } = require("./authSchema");
const { updateSubscriptionSchema } = require("./updateSubscriptionSchema");

const joiSchemas = {
  addSchema,
  updateFavoriteSchema,
  authSchema,
  updateSubscriptionSchema,
};

module.exports = { joiSchemas };
