const Contact = require("../../models/contact");

const { HttpError, ctrlWrapper } = require("../../helpers");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  if (!favorite) {
    const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
      skip,
      limit,
    });
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  }
  const result = await Contact.find(
    { owner, favorite },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = { getAll: ctrlWrapper(getAll) };
