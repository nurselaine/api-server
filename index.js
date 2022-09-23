'use strict';

const { start } = require('./src/server');
const { sequelizeDatabase, PlantsModel, PotsModel } = require('./src/models/index');

sequelizeDatabase.sync()
  .then(() => {
    console.log('successfully connected to DB!');
    // PlantsModel.create({ name: 'Daisy' });
    // PotsModel.create({name: 'elaine', size: 4});
    start();
  })
  .catch(error => console.error('ERROR: ', error.message));

// start();


