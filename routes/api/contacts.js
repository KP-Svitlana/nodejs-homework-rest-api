const express = require("express");

const ctrl = require("../../controllers");
const { joiSchemas } = require("../../schemas");
const { validateBody, isValidId, authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, ctrl.contactsCtrl.getAll);

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrl.contactsCtrl.getContactById
);

router.post(
  "/",
  authenticate,
  validateBody(joiSchemas.addSchema),
  ctrl.contactsCtrl.addContact
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrl.contactsCtrl.deleteContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(joiSchemas.addSchema),
  ctrl.contactsCtrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(joiSchemas.updateFavoriteSchema),
  ctrl.contactsCtrl.updateStatusContact
);

module.exports = router;
