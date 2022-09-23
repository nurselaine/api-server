'use strict';

const { start } = require('./src/server');
const { sequelizeDatabase, PlantsModel } = require('./src/models/index');

console.log('hello');
sequelizeDatabase.sync()
  .then(() => {
    console.log('successfully connected to DB!');
    PlantsModel.create({ name: 'Daisy' });
  })
  .catch(error => console.error('ERROR: ', error.message));

start();
