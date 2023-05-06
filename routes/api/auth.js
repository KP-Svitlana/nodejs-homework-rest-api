const express = require("express");
const { validateBody } = require("../../middlewares");
const { joiSchemas } = require("../../schemas");
const ctrl = require("../../controllers");

const router = express.Router();

router.post(
  "/register",
  validateBody(joiSchemas.authSchema),
  ctrl.authCtrl.register
);

module.exports = router;
