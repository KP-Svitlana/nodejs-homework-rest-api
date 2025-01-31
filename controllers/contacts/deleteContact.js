const Contact = require("../../models/contact");
const { ctrlWrapper, HttpError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const id = req.params.contactId;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

module.exports = { deleteContact: ctrlWrapper(deleteContact) };
