const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { joiSchemas } = require("../../schemas");
const ctrl = require("../../controllers");

const router = express.Router();

router.post(
  "/register",
  validateBody(joiSchemas.authSchema),
  ctrl.authCtrl.register
);

router.post("/login", validateBody(joiSchemas.authSchema), ctrl.authCtrl.logIn);

router.get("/current", authenticate, ctrl.usersCtrl.getCurrent);

router.post("/logout", authenticate, ctrl.authCtrl.logOut);

router.patch(
  "/",
  authenticate,
  validateBody(joiSchemas.updateSubscriptionSchema),
  ctrl.usersCtrl.userSubscriptionUpdate
);
module.exports = router;
