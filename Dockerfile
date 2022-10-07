###############################################################
###         STAGE 1: Build market-monitoring app            ###
###############################################################

FROM node:18-alpine AS runner

# Set working directory & bash defaults
WORKDIR /home/node/app

# Copy source files
COPY . .

# Install pre-requisite packages
RUN apk update && apk add --no-cache bash ca-certificates curl

# Build-time arguments
ARG NODE_ENV=production
ARG NPM_CONFIG_LOGLEVEL=warn
ARG PORT=3000
ARG MARKET_ARBITRAGE_THRESHOLD=10.0
ARG COINGECKO_TOKEN_ID="cheqd-network"

# Run-time environment variables
ENV NODE_ENV ${NODE_ENV}
ENV NPM_CONFIG_LOGLEVEL ${NPM_CONFIG_LOGLEVEL}
ENV PORT ${PORT}
ENV MARKET_ARBITRAGE_THRESHOLD ${MARKET_ARBITRAGE_THRESHOLD}
ENV COINGECKO_TOKEN_ID ${COINGECKO_TOKEN_ID}

# Installing dependencies
RUN npm ci

# Set folder permissions
RUN chown -R node:node /home/node/app

# Specify default port
EXPOSE ${PORT}

# Set user and shell
USER node
SHELL ["/bin/bash", "-euo", "pipefail", "-c"]

# Run the application
CMD [ "npm start" ]
