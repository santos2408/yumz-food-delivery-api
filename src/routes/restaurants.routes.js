const express = require("express");
const router = express.Router();

const restaurantsController = require("../controllers/restaurantsController");

router.post("/restaurants/create", restaurantsController.postCreateRestaurant);

router.get("/restaurants", restaurantsController.getRestaurants);

module.exports = router;
