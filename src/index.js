const express = require('express');
const createError = require('http-errors');
const app = express();

const arbitrageRouter = require('./routes/arbitrage');

app.use('/', arbitrageRouter);
app.use((_, __, next) => {
  next(createError(404));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}!`));
