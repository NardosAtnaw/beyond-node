const express = require("express");

const controller = require("../controllers/dashboard");
const auth = require("../controllers/Authentication");

const router = express.Router();

router.get("/back/register", controller.getData);
router.post("/back/register", controller.addCustomer);
router.post("/back/schedule", controller.addSchedule);
router.get("/back/schedule", controller.showSchedule);
router.post("/back/signup", auth.signup);
router.post("/back/login", auth.login);

module.exports = router;
