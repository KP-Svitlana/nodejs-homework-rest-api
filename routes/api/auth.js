const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { joiSchemas } = require("../../schemas");
const ctrl = require("../../controllers");

const router = express.Router();

router.post(
  "/register",
  validateBody(joiSchemas.authSchema),
  ctrl.authCtrl.register
);

router.get("/verify/:verificationToken", ctrl.authCtrl.verifyEmail);

router.post(
  "/verify",
  validateBody(joiSchemas.verifyEmailSchema),
  ctrl.authCtrl.resendVerifyEmail
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

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.usersCtrl.updateAvatar
);
module.exports = router;
