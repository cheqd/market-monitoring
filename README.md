# Market Monitoring

## Introduction

This repository contains a Digital Ocean app that fetchs latest price of `CHEQ` token accross different markets using [CoinGecko's API](https://www.coingecko.com/en/api). In addition, it calculates and returns possible abitrage opportunties if present.

## Local setup

`npm install`

`npm start`

[Contributing Guide](CONTRIBUTING.md)

## Baseurl

staging - https://market-monitoring-staging.cheqd.net

production - https://market-monitoring.cheqd.net

## Endpoints

### /arbitrage

- returns an prices across different market and arbitrage opportunities per market pair.
