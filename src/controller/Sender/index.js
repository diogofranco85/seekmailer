const Mail = require('../../libs/mail');

class Sender {
  async index(req, res) {
    const { to, subject, template, name, data } = req.body;

    try {
      await Mail.sendMail({
        to,
        subject,
        template,
        context: {
          data,
          to,
          name,
        },
      });

      res.json({ status: 200, message: 'Enviado com sucesso' });
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message });
    }
  }
}

module.exports = new Sender();
