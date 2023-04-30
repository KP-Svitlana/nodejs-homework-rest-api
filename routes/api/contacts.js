const express = require("express");

const ctrl = require("../../controllers");
const { addSchemas, updateFavoriteSchema } = require("../../schemas");
const { validateBody, isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(addSchemas), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(addSchemas),
  ctrl.updateContact
);

router.patch(
  "/:contactId",
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
