const Contact = require("../../models/contact");

const { HttpError, ctrlWrapper } = require("../../helpers");

const getAll = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = { getAll: ctrlWrapper(getAll) };
