const {
  getAll,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
} = require("./contacts");

const { register } = require("./auth");

const contactsCtrl = {
  getAll,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
};

const authCtrl = { register };

module.exports = {
  contactsCtrl,
  authCtrl,
};
