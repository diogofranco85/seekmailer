const { Router } = require('express');
const Sender = require('../controller/Sender');

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ status: 200, message: 'Seek Mailer funcionando' });
});

routes.post('/', Sender.index);

module.exports = routes;
