require('dotenv').config();

const path = require('path');
const express = require('express');
const helmet = require('helmet');
const app = express();

const { HOST, PATH_STATIC, PORT } = process.env;

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-eval'"],
        objectSrc: ["'self'"],
      },
    },
  }),
);

app.use('/', express.static(path.join(__dirname, PATH_STATIC)));
app.get('/*', (req, res) => res.redirect('/#error404'));

app.listen(PORT, () => {
  console.log(`App http://localhost:${PORT}/#`);
});
