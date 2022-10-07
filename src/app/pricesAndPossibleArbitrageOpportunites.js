const {
  getCoinGeckoTickersDataForCheqdToken,
} = require('../api/coinGeckoTickersForCheqd');
const { FlagArbitrage } = require('./arbitrageOpportunities');
const { Tickers } = require('./tickers');

async function pricesAndPossibleArbitrageOpportunites() {
  const coinGeckoData = await getCoinGeckoTickersDataForCheqdToken();
  const flagArbitrage = new FlagArbitrage();
  const tickers = new Tickers();
  const prices = tickers.getPrices(coinGeckoData.tickers);
  const arbitrageOpportunities = flagArbitrage.arbitrageOpportunities(prices);

  return {
    prices: prices,
    arbitrageOpportunities: arbitrageOpportunities,
  };
}

exports.pricesAndPossibleArbitrageOpportunites =
  pricesAndPossibleArbitrageOpportunites;
