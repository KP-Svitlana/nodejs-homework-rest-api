const { register } = require("./register");
const { logIn } = require("./logIn");
const { logOut } = require("./logOut");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVetifyEmail");

module.exports = { register, logIn, logOut, verifyEmail, resendVerifyEmail };
