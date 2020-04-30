const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, post, user, pass } = require('../modules/mail.json');

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

transport.use(
  'compile',
  hbs({
    viewEngine: 'handlebars',
    viewEngine: './src/resources/mail/',
    extName: '.html',
  })
);

module.exports = transport;
