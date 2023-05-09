const Joi = require("joi");
const { HttpError } = require("../helpers");

const subscriptionList = ["starter", "pro", "business"];

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required()
    .error(HttpError(400, "missing field subscription")),
});

module.exports = { updateSubscriptionSchema };
