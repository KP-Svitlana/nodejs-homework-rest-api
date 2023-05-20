const { addSchema } = require("./addSchema");
const { updateFavoriteSchema } = require("./updateFavoriteSchema");
const { authSchema } = require("./authSchema");
const { updateSubscriptionSchema } = require("./updateSubscriptionSchema");
const { verifyEmailSchema } = require("./verifyEmailShema");

const joiSchemas = {
  addSchema,
  updateFavoriteSchema,
  authSchema,
  updateSubscriptionSchema,
  verifyEmailSchema,
};

module.exports = { joiSchemas };
