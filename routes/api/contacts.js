const express = require("express");

const ctrl = require("../../controllers");
const { joiSchemas } = require("../../schemas");
const { validateBody, isValidId } = require("../../middlewares");

const router = express.Router();

// console.log(schemas);

router.get("/", ctrl.contactsCtrl.getAll);

router.get("/:contactId", isValidId, ctrl.contactsCtrl.getContactById);

router.post(
  "/",
  validateBody(joiSchemas.addSchema),
  ctrl.contactsCtrl.addContact
);

router.delete("/:contactId", isValidId, ctrl.contactsCtrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(joiSchemas.addSchema),
  ctrl.contactsCtrl.updateContact
);

router.patch(
  "/:contactId",
  isValidId,
  validateBody(joiSchemas.updateFavoriteSchema),
  ctrl.contactsCtrl.updateStatusContact
);

module.exports = router;
