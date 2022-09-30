const express = require("express");
const app = express();

const {
  getCoinGeckoTickersDataForCheqdToken,
} = require("./api/coinGeckoTickersForCheqd");
const { FlagArbitrage } = require("./app/flagArbitrage");
const { Tickers } = require("./app/tickers");

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

app.get("/", async (req, res) => {
  const data = await pricesAndPossibleArbitrageOpportunites();
  res.json(data);
});

app.listen(3000, () => console.log("Listenin on 3000."));
