const CoinGecko = require('coingecko-api');
const { COIN_GECKO_CHEQ_COIN_ID } = require('../helpers/constants');

async function getCoinGeckoTickersDataForCheqdToken() {
  const CoinGeckoClient = new CoinGecko();
  let data = await CoinGeckoClient.coins.fetchTickers(COIN_GECKO_CHEQ_COIN_ID);
  if (!data.success) {
    return {
      message: data.message,
      code: data.code,
    };
  }
  return data.data;
}

exports.getCoinGeckoTickersDataForCheqdToken =
  getCoinGeckoTickersDataForCheqdToken;
