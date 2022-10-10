const { COINGECKO_TOKEN_ID } = require('../helpers/constants');

class Tickers {
  getPrices(coingeckoTickers) {
    const prices = [];
    coingeckoTickers.forEach((ticker) => {
      let coin_pair = {
        market: ticker.market.name,
        coin_pair:
          ticker.coin_id === COINGECKO_TOKEN_ID
            ? ticker.target_coin_id
            : ticker.coin_id,
        price: ticker.converted_last.usd,
      };
      prices.push(coin_pair);
    });
    return prices;
  }
}

exports.Tickers = Tickers;
