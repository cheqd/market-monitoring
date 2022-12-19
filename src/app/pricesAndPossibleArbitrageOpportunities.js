const { getCoinGeckoTickersDataForToken } = require('../api/coinGeckoTickers');
const { FlagArbitrage } = require('./flagArbitrage');
const { Tickers } = require('./tickers');

async function pricesAndPossibleArbitrageOpportunities() {
  const coinGeckoData = await getCoinGeckoTickersDataForToken();
  const flagArbitrage = new FlagArbitrage();
  const tickers = new Tickers();
  const prices = tickers.getPrices(coinGeckoData.tickers);
  const arbitrageOpportunities = flagArbitrage.arbitrageOpportunities(prices);

  return {
    prices: prices,
    arbitrageOpportunities: arbitrageOpportunities,
  };
}

exports.pricesAndPossibleArbitrageOpportunities =
  pricesAndPossibleArbitrageOpportunities;
