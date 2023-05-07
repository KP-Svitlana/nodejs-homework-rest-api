const { ctrlWrapper } = require("../../helpers");
const User = require("../../models/user");

const logOut = async (req, res) => {
  const { id } = req.user;
  await User.findByIdAndUpdate(id, { token: "" });

  res.status(204);
};

module.exports = { logOut: ctrlWrapper(logOut) };
