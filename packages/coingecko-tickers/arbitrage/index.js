const https = require("https");

const {
  getCoinGeckoTickersDataForCheqdToken,
} = require("./api/coinGeckoTickersForCheqd");
const { FlagArbitrage } = require("./app/flagArbitrage");
const { Tickers } = require("./app/tickers");

async function main() {
  return await pricesAndPossibleArbitrageOpportunites();
}

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

exports.main = main;
