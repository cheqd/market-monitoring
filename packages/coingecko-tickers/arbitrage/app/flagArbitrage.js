const { MARKET_ARBITRAGE_THRESHOLD } = require("../helpers/constants");

class FlagArbitrage {
  calculateDifferencePercentage(price_a, price_b) {
    return 100 * Math.abs((price_a - price_b) / ((price_a + price_b) / 2));
  }

  arbitrageOpportunities(prices) {
    var arbitrageOpportunities = [];

    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        const percentage_delta = this.calculateDifferencePercentage(
          prices[i].price,
          prices[j].price
        );
        if (percentage_delta > MARKET_ARBITRAGE_THRESHOLD) {
          arbitrageOpportunities.push({
            market_a: prices[i],
            market_b: prices[j],
            percentage_delta: percentage_delta,
          });
        }
      }
    }
    return arbitrageOpportunities;
  }
}

exports.FlagArbitrage = FlagArbitrage;
