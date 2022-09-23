'use strict';

const { start } = require('./src/server');
const { sequelizeDatabase, PlantsModel } = require('./src/models/index');

sequelizeDatabase.sync()
  .then(() => {
    console.log('successfully connected to DB!');
    // PlantsModel.create({ name: 'Daisy' });
    start();
  })
  .catch(error => console.error('ERROR: ', error.message));

// start();
