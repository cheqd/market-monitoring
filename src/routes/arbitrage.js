const express = require("express");
const router = express.Router();
const {
  pricesAndPossibleArbitrageOpportunities,
} = require("../app/pricesAndPossibleArbitrageOpportunities");
router.get("/", async (_, res, __) => {
  const data = await pricesAndPossibleArbitrageOpportunities();
  res.json(data);
});

module.exports = router;
