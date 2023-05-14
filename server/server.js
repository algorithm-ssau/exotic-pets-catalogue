const express = require('express');
const app = express();

const config = require('.\\config.json');
const knex = require('knex')(config);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });

  