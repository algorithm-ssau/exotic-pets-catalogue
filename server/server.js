const express = require('express');
const app = express();

const config = require('.\\config.json');
const knex = require('knex')(config);

// GET route for retrieving data from a table for a specific id and returning HTML code
app.get('/', (req, res) => {

    const id = req.params.id; // Extract id from request parameter

    knex.select('name', 'description', 'images_id').from('animals').where('id', id).then((data) => {
      const imageId = data[0].images_id; // Extract image_id from data

      // Query the second table to get the image attribute data using image_id
      knex.select('image').from('images').where('id', imageId).then((imageData) => {

        let object = {
            name:data[0].name,
            description:data[0].description,
            image:imageData[0].image
        }

        let json = JSON.stringify(object);

        res.send(json);

      }).catch((err) => { res.status(500).send({ error: 'Could not fetch data from database Step1(where i look animals table)' }); });

    }).catch((err) => { res.status(500).send({ error: 'Could not fetch data from database Step2(where i look images table)' }); });

  });

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });

  