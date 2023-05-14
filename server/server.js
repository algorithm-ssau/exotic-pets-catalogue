const express = require('express');
const app = express();


let knex;

fetch('https://127.0.0.1:3000/config.json')
    .then((response) => response.json())
    .then((json) => {
        let config = JSON.parse(json);
        knex = require('knex')(config);
    });

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });

  