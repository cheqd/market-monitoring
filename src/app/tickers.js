const { COINGECKO_TOKEN_ID } = require('../helpers/constants');

class Tickers {
  getPrices(coingeckoTickers) {
    const prices = [];
    coingeckoTickers.forEach((ticker) => {
      let coinPair = {
        marketName: ticker.marketName.name,
        coinPair:
          ticker.coin_id === COINGECKO_TOKEN_ID
            ? ticker.target_coin_id
            : ticker.coin_id,
        coinPrice: ticker.converted_last.usd,
      };
      prices.push(coinPair);
    });
    return prices;
  }
}

exports.Tickers = Tickers;
