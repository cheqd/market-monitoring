###############################################################
###         STAGE 1: Build market-monitoring app            ###
###############################################################

FROM node:16-alpine AS runner

# Install pre-requisite packages
RUN apk update && apk add --no-cache bash ca-certificates curl

# Set working directory & bash defaults
WORKDIR /home/node/app

# Copy source files
COPY . .

# Installing dependencies
RUN npm ci

# Build-time arguments
ARG NPM_CONFIG_LOGLEVEL
ARG PORT=8787
ARG MARKET_ARBITRAGE_THRESHOLD=10.0
ARG COINGECKO_TOKEN_ID="cheqd-network"

# Run-time environment variables
ENV NPM_CONFIG_LOGLEVEL ${NPM_CONFIG_LOGLEVEL}
ENV PORT ${PORT}
ENV MARKET_ARBITRAGE_THRESHOLD ${MARKET_ARBITRAGE_THRESHOLD}
ENV COINGECKO_TOKEN_ID ${COINGECKO_TOKEN_ID}

# Set folder permissions
RUN chown -R node:node /home/node/app

# Specify default port
EXPOSE ${PORT}

# Set user and shell
USER node
SHELL ["/bin/bash", "-euo", "pipefail", "-c"]

# Run the application
CMD [ "npm start" ]
