const express = require("express");

const ctrl = require("../../controllers");
const addSchemas = require("../../schemas");
const validateBody = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(addSchemas), ctrl.addContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", validateBody(addSchemas), ctrl.updateContact);

module.exports = router;
