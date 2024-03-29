# Marketing Monitoring API

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/cheqd/market-monitoring?color=green&label=stable%20release&style=flat-square)](https://github.com/cheqd/market-monitoring/releases/latest) ![GitHub Release Date](https://img.shields.io/github/release-date/cheqd/market-monitoring?color=green&style=flat-square) [![GitHub license](https://img.shields.io/github/license/cheqd/market-monitoring?color=blue&style=flat-square)](https://github.com/cheqd/market-monitoring/blob/main/LICENSE)

[![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/cheqd/market-monitoring?include_prereleases&label=dev%20release&style=flat-square)](https://github.com/cheqd/market-monitoring/releases/) ![GitHub commits since latest release (by date)](https://img.shields.io/github/commits-since/cheqd/market-monitoring/latest?style=flat-square) [![GitHub contributors](https://img.shields.io/github/contributors/cheqd/market-monitoring?label=contributors%20%E2%9D%A4%EF%B8%8F&style=flat-square)](https://github.com/cheqd/market-monitoring/graphs/contributors)

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cheqd/market-monitoring/dispatch.yml?label=workflows&style=flat-square)](https://github.com/cheqd/market-monitoring/actions/workflows/dispatch.yml) ![GitHub repo size](https://img.shields.io/github/repo-size/cheqd/market-monitoring?style=flat-square)

## ℹ️ Overview

This repository contains a smaller helper app that fetches the latest price of a given token from the [CoinGecko's API](https://www.coingecko.com/en/api) and compares its price across different markets to detect if it is susceptible to arbitrage opportunities.

This helper app is used by the [Cosmos Custom Data API](https://github.com/cheqd/data-api) to trigger alerts in case there are arbitrage opportunities flagged.

## 📖 Usage

The app is pre-configured to assess arbitrage opportunities for a given token's CoinGecko Token ID, e.g., [`cheqd-network`](https://www.coingecko.com/en/coins/cheqd-network) across all the markets and token pairs it trades on.

The other parameter that needs to be set is a **market arbitrage threshold** (e.g., 10%), which is the allowed percentage difference allowed before a market pair is counted as susceptible to arbitrage.

The app is invoked hitting the `/` endpoint (with a `GET` request), which returns a JSON response with the following details.

### Response Details

#### `arbitrageOpportunities`

Compares the token price for given token, e.g., CHEQ against a given token pair and calculates the percentage difference between the token price across two different market venues.

```json
{
  "marketPairId": "01",
  "marketName1": "Osmosis",
  "coinPrice1": 0.03859061,
  "coinPair1": "osmosis",
  "marketName2": "Gate.io",
  "coinPrice2": 0.03902044,
  "coinPair2": "tether",
  "arbitragePossible": false,
  "percentageDelta": 1.1076515521952248
}
```

#### `prices`

An array of items containing `coinPair`, `marketName` and `coinPrice` of given token on that market and token pair.

```json
{
  "coinPair": "osmosis",
  "marketName": "Osmosis",
  "coinPrice": 0.03487637
}
```

### Sample Response

```json
{
  "prices": [
    {
      "marketName": "Osmosis",
      "coinPair": "osmosis",
      "coinPrice": 0.03859061
    },
    {
      "marketName": "Gate.io",
      "coinPair": "tether",
      "coinPrice": 0.03902044
    }
  ],
  "arbitrageOpportunities": [
    {
      "marketPairId": "01",
      "marketName1": "Osmosis",
      "coinPrice1": 0.03859061,
      "coinPair1": "osmosis",
      "marketName2": "Gate.io",
      "coinPrice2": 0.03902044,
      "coinPair2": "tether",
      "arbitragePossible": false,
      "percentageDelta": 1.1076515521952248
    }
  ]
}
```

## 🧑‍💻🛠 Developer Guide

### Setup

Dependencies can be installed using NPM or any other package manager.

```bash
npm install
```

### Configuration

The application expects two environment variables to be defined for the app to function:

1. `MARKET_ARBITRAGE_THRESHOLD`: Percentage difference to consider for arbitrage threshold. (Default: `10.0` or 10%)
2. `COINGECKO_TOKEN_ID`: [CoinGecko token ID](https://www.coingecko.com/en/api/documentation) ("name"), which is usually the name of the token's profile page on CoinGecko. (Default: `cheqd-network` for the CHEQ token)

### Run

Once configured, the app can be run using NPM:

```bash
npm start
```

Or, to build and run in Docker, use the [Dockerfile](Dockerfile) provided.

## 🐞 Bug reports & 🤔 feature requests

If you notice anything not behaving how you expected, or would like to make a suggestion / request for a new feature, please create a [**new issue**](https://github.com/cheqd/market-monitoring/issues/new/choose) and let us know.

## 💬 Community

The [**cheqd Community Slack**](http://cheqd.link/join-cheqd-slack) is our primary chat channel for the open-source community, software developers, and node operators.

Please reach out to us there for discussions, help, and feedback on the project.

## 🙋 Find us elsewhere

[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/cheqd) [![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](http://cheqd.link/discord-github) [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/intent/follow?screen_name=cheqd_io) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](http://cheqd.link/linkedin) [![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)](http://cheqd.link/join-cheqd-slack) [![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://blog.cheqd.io) [![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCBUGvvH6t3BAYo5u41hJPzw/)
