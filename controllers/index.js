const {
  getAll,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
} = require("./contacts");

const contactsCtrl = {
  getAll,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  deleteContact,
};

module.exports = {
  contactsCtrl,
};
