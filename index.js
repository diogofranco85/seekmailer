require('dotenv/config');
const express = require('express');
const app = express();
const Youch = require('youch');
const sentry = require('@sentry/node');

const routes = require('./src/routes');

app.use(express.json());
app.use(routes);
app.use(async (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(err, req).toHTML();

    return res.status(500).send(errors);
  }
  return res.status(500).json({ error: 'Internal Server Error' });
});

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}

app.listen(3001, () => {
  console.log('startado Seek Mailer');
});
