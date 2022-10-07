# Market Monitoring

## Introduction

This repository contains a Digital Ocean app that fetchs latest price of `CHEQ` token accross different markets using [CoinGecko's API](https://www.coingecko.com/en/api). In addition, it calculates and returns possible abitrage opportunties if present.

## Local setup

`npm install`

`npm start`

## Endpoints

### /arbitrage/all

- returns prices and arbitrage opptutinies

### /arbitrage

- returns an array of arbitrage opportunities per market pair.
