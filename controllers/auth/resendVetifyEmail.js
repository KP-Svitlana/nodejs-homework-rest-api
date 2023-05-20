const { ctrlWrapper, HttpError, emailSender } = require("../../helpers");
const User = require("../../models/user");
require("dotenv").config();

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw HttpError(400, "Missing required field email");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email not found");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }
  const verifyEmail = {
    to: email,
    subject: "Please verify your email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to verify email</a>`,
  };

  await emailSender(verifyEmail);

  return res.json({ message: "Verification email sent" });
};

module.exports = { resendVerifyEmail: ctrlWrapper(resendVerifyEmail) };
