const express = require("express");

const controller = require("../controllers/dashboard");
const auth = require("../controllers/Authentication");

const router = express.Router();

router.get("/register", controller.getData);
router.post("/register", controller.addCustomer);
router.post("/schedule", controller.addSchedule);
router.get("/schedule", controller.showSchedule);
router.post("/signup", auth.signup);
router.post("/login", auth.login);

module.exports = router;
