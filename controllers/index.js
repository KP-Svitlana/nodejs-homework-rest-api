const {
  getAll,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
} = require("./contacts");

const { register, logIn } = require("./auth");

const contactsCtrl = {
  getAll,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
};

const authCtrl = { register, logIn };

module.exports = {
  contactsCtrl,
  authCtrl,
};
