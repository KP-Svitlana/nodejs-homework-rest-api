const { HttpError, ctrlWrapper } = require("../../helpers");
const User = require("../../models/user");

const userSubscriptionUpdate = async (req, res) => {
  const id = req.user;
  const result = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: " Subscription updated" });
};

module.exports = {
  userSubscriptionUpdate: ctrlWrapper(userSubscriptionUpdate),
};
