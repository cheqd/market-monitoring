const { MARKET_ARBITRAGE_THRESHOLD } = require('../helpers/constants');

class FlagArbitrage {
  calculateDifferencePercentage(price_a, price_b) {
    return 100 * Math.abs((price_a - price_b) / ((price_a + price_b) / 2));
  }

  arbitrageOpportunities(prices) {
    let arbitrageOpportunities = [];
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        const percentage_delta = this.calculateDifferencePercentage(
          prices[i].price,
          prices[j].price
        );

        arbitrageOpportunities.push({
          market_pair_id: `${i}${j}`,
          market_name_a: prices[i].market,
          coin_price_a: prices[i].price,
          coin_pair_a: prices[i].coin_pair,
          market_name_b: prices[j].market,
          coin_price_b: prices[j].price,
          coin_pair_b: prices[j].coin_pair,
          arbitragePossible: percentage_delta > MARKET_ARBITRAGE_THRESHOLD,
          percentage_delta: percentage_delta,
        });
      }
    }
    return arbitrageOpportunities;
  }
}

exports.FlagArbitrage = FlagArbitrage;
