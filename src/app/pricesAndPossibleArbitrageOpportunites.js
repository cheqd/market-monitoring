const {
  getCoinGeckoTickersDataForCheqdToken,
} = require("../api/coinGeckoTickersForCheqd");
const { FlagArbitrage } = require("./flagArbitrage");
const { Tickers } = require("./tickers");

async function pricesAndPossibleArbitrageOpportunites() {
  const coinGeckoData = await getCoinGeckoTickersDataForCheqdToken();
  const flagArbitrage = new FlagArbitrage();
  const tickers = new Tickers();
  const prices = tickers.getPrices(coinGeckoData.tickers);
  const arbitrageOpportunities = flagArbitrage.arbitrageOpportunities(prices);

  return {
    prices: prices,
    arbitrageOpportunities: arbitrageOpportunities,
    hasArbitrageOpportunities: arbitrageOpportunities.length > 0,
  };
}

exports.pricesAndPossibleArbitrageOpportunites =
  pricesAndPossibleArbitrageOpportunites;
