const {
  getAll,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
} = require("./contacts");

const {
  register,
  logIn,
  logOut,
  verifyEmail,
  resendVerifyEmail,
} = require("./auth");
const { getCurrent, userSubscriptionUpdate, updateAvatar } = require("./users");

const contactsCtrl = {
  getAll,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
};

const authCtrl = { register, logIn, logOut, verifyEmail, resendVerifyEmail };
const usersCtrl = { getCurrent, userSubscriptionUpdate, updateAvatar };

module.exports = {
  contactsCtrl,
  authCtrl,
  usersCtrl,
};
