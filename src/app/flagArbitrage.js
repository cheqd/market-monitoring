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
          prices[i].coinPrice,
          prices[j].coinPrice
        );

        arbitrageOpportunities.push({
          marketPairId: `${i}${j}`,
          marketName1: prices[i].marketName,
          coinPair1: prices[i].coinPair,
          coinPrice1: prices[i].coinPrice,
          marketName2: prices[j].marketName,
          coinPair2: prices[j].coinPair,
          coinPrice2: prices[j].coinPrice,
          arbitragePossible: percentageDelta > MARKET_ARBITRAGE_THRESHOLD,
          percentageDelta: percentageDelta,
        });
      }
    }
    return arbitrageOpportunities;
  }
}

exports.FlagArbitrage = FlagArbitrage;
