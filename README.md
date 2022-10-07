# Market Monitoring

## Introduction

This repository contains a Digital Ocean app that fetchs latest price of `CHEQ` token accross different markets using [CoinGecko's API](https://www.coingecko.com/en/api). In addition, it calculates and returns possible abitrage opportunties if present.

## Local setup

`npm install`
`npm start`

### /arbitrage

> returns a json with following `properties`.

1. `arbitrageOpportunities` an array of market pairs which caused the possible arbitrage opportunity, as well as the percentage difference among the two markets. Example element of `arbitrageOpportunities` array.

```json
{
  "market_a": {
    "coin_pair": "osmosis",
    "market": "Osmosis",
    "price": 0.03487637
  },
  "market_b": {
    "coin_pair": "tether",
    "market": "Uniswap (v3)",
    "price": 0.0368916
  },
  "percentage_delta": 5.615959320014207
}
```

2. `prices` array of items containing `coin_pair` , `market` and `price` of `CHEQ` token. A sample item will look like this.

```json
{
  "coin_pair": "osmosis",
  "market": "Osmosis",
  "price": 0.03487637
}
```

3. `hasArbitrageOpportunities` a boolean which will set to `true` if there are any market arbitrage.

### `/arbitrage` sample response

```json
{
  "arbitrageOpportunities": [
    {
      "market_a": {
        "coin_pair": "osmosis",
        "market": "Osmosis",
        "price": 0.03487637
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "BitMart",
        "price": 0.03575065
      },
      "percentage_delta": 2.475766356841914
    },
    {
      "market_a": {
        "coin_pair": "osmosis",
        "market": "Osmosis",
        "price": 0.03487637
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "Uniswap (v3)",
        "price": 0.0368916
      },
      "percentage_delta": 5.615959320014207
    },
    {
      "market_a": {
        "coin_pair": "osmosis",
        "market": "Osmosis",
        "price": 0.03487637
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "LBank",
        "price": 0.03575664
      },
      "percentage_delta": 2.49251730883337
    },
    {
      "market_a": {
        "coin_pair": "tether",
        "market": "Gate.io",
        "price": 0.03487257
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "BitMart",
        "price": 0.03575065
      },
      "percentage_delta": 2.4866609027455935
    },
    {
      "market_a": {
        "coin_pair": "tether",
        "market": "Gate.io",
        "price": 0.03487257
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "Uniswap (v3)",
        "price": 0.0368916
      },
      "percentage_delta": 5.626846934898009
    },
    {
      "market_a": {
        "coin_pair": "tether",
        "market": "Gate.io",
        "price": 0.03487257
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "LBank",
        "price": 0.03575664
      },
      "percentage_delta": 2.503411832016812
    },
    {
      "market_a": {
        "coin_pair": "cosmos",
        "market": "Osmosis",
        "price": 0.0346889
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "BitMart",
        "price": 0.03575065
      },
      "percentage_delta": 3.014641632435188
    },
    {
      "market_a": {
        "coin_pair": "cosmos",
        "market": "Osmosis",
        "price": 0.0346889
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "Uniswap (v3)",
        "price": 0.0368916
      },
      "percentage_delta": 6.154469443493675
    },
    {
      "market_a": {
        "coin_pair": "cosmos",
        "market": "Osmosis",
        "price": 0.0346889
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "LBank",
        "price": 0.03575664
      },
      "percentage_delta": 3.031391341453263
    },
    {
      "market_a": {
        "coin_pair": "tether",
        "market": "BitMart",
        "price": 0.03575065
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "Uniswap (v3)",
        "price": 0.0368916
      },
      "percentage_delta": 3.1412848583296773
    },
    {
      "market_a": {
        "coin_pair": "tether",
        "market": "Uniswap (v3)",
        "price": 0.0368916
      },
      "market_b": {
        "coin_pair": "tether",
        "market": "LBank",
        "price": 0.03575664
      },
      "percentage_delta": 3.1245354326546586
    }
  ],
  "hasArbitrageOpportunities": true,
  "prices": [
    {
      "coin_pair": "osmosis",
      "market": "Osmosis",
      "price": 0.03487637
    },
    {
      "coin_pair": "tether",
      "market": "Gate.io",
      "price": 0.03487257
    },
    {
      "coin_pair": "cosmos",
      "market": "Osmosis",
      "price": 0.0346889
    },
    {
      "coin_pair": "tether",
      "market": "BitMart",
      "price": 0.03575065
    },
    {
      "coin_pair": "tether",
      "market": "Uniswap (v3)",
      "price": 0.0368916
    },
    {
      "coin_pair": "tether",
      "market": "LBank",
      "price": 0.03575664
    }
  ]
}
```
