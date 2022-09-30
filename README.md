# Market Monitoring

## Introduction

This repository contains a Digital Ocean app that fetchs latest price of `CHEQ` token accross different markets using [CoinGecko's API](https://www.coingecko.com/en/api). In addition, it calculates and returns possible abitrage opportunties if present.

## Deploying the Function

1. [First Install and Configure](https://docs.digitalocean.com/reference/doctl/how-to/install/) `doctl`
2. Connect to the namespace `cg-api`

```bash
doctl serverless connect
```

3. Deploy a Function in the Current Namespace

```bash
doctl serverless deploy cg-api
```

4. You can get URL for your deployed function using command below passing your function name. In our case our function name will be `coingecko-tickers/arbitrage`

```bash
doctl sbx fn get <funcName> --url
```

5. Alternatively, you can go to [dashboard](https://cloud.digitalocean.com/functions/) and get it.

## Using the Function

You can invoke the function using the REST API. All APIs are protected with HTTP Basic authentication. See example below

```
curl -X POST "https://faas-blr1-8177d592.doserverless.co/api/v1/namespaces/fn-6d0a7473-a6eb-4404-8601-a3bd56525b02/actions/coingecko-tickers/arbitrage?blocking=true&result=true" \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic <TOKEN>
```

### coingecko-tickers/arbitrage

`coingecko-tickers/arbitrage` function returns a json with following `properties`.

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

### coingecko-tickers/arbitrage function sample response

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
