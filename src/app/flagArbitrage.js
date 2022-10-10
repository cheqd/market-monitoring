const { MARKET_ARBITRAGE_THRESHOLD } = require('../helpers/constants');

class FlagArbitrage {
  calculateDifferencePercentage(price_a, price_b) {
    return 100 * Math.abs((price_a - price_b) / ((price_a + price_b) / 2));
  }

  arbitrageOpportunities(prices) {
    let arbitrageOpportunities = [];
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        const percentageDelta = this.calculateDifferencePercentage(
          prices[i].price,
          prices[j].price
        );

        arbitrageOpportunities.push({
          marketPairId: `${i}${j}`,
          marketName1: prices[i].market,
          coinPair1: prices[i].coin_pair,
          coinPrice1: prices[i].price,
          marketName2: prices[j].market,
          coinPair2: prices[j].coin_pair,
          coinPrice2: prices[j].price,
          arbitragePossible: percentageDelta > MARKET_ARBITRAGE_THRESHOLD,
          percentageDelta: percentageDelta,
        });
      }
    }
    return arbitrageOpportunities;
  }
}

exports.FlagArbitrage = FlagArbitrage;
