const express = require("express");
const router = express.Router();

const dealsController = require("../controllers/dealsController");

router.post("/deals/create", dealsController.postCreateDeal);

router.get("/deals", dealsController.getDeals);

module.exports = router;
