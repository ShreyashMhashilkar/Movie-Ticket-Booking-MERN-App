const express = require("express");
const {
  createOrderController,
  userOrderControlller
} = require("../controllers/orderController");

//router object
const router = express.Router();

//routes

//POST || create blog
router.post("/create-order", createOrderController);

// GET || user blog
router.get("/user-order/:id", userOrderControlller);

module.exports = router;