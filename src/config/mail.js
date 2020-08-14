require('dotenv/config');

module.exports = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
  default: {
    from: 'Sistemas Seek <noreply@ubsvalorem.com.br>',
  },
};
