const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) return res.status(401).send({ error: 'No token provided' });

  const parts = authHeaders.split(' ');

  if (!parts.lenght === 2)
    return res.status(401).send({ error: 'Token error' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: 'Token malformatted' });

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ erro: 'Token Invalid' });

    req.userId = decoded.id;

    return next();
  });
};
