const express = require('express');
const router = express.Router();
const {
  pricesAndPossibleArbitrageOpportunites,
} = require('../app/pricesAndPossibleArbitrageOpportunites');
router.get('/', async (_, res, __) => {
  const data = await pricesAndPossibleArbitrageOpportunites();
  res.json(data);
});

module.exports = router;
