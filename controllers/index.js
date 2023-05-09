const {
  getAll,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
} = require("./contacts");

const { register, logIn, logOut } = require("./auth");
const { getCurrent, userSubscriptionUpdate } = require("./users");

const contactsCtrl = {
  getAll,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
};

const authCtrl = { register, logIn, logOut };
const usersCtrl = { getCurrent, userSubscriptionUpdate };

module.exports = {
  contactsCtrl,
  authCtrl,
  usersCtrl,
};
