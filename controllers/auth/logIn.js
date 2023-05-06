const User = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");
const bcrypt = require("bcrypt");

const logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const token = "74grfcidfbfkgh";

  res.json({
    token,
  });
};

module.exports = { logIn: ctrlWrapper(logIn) };
