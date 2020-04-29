const nodemailer = require('nodemailer');

const { host, post, user, pass } = require('../modules/mail.json');

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

module.exports = transport;
