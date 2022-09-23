'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const plantsSchema = require('./plant.schema');
const PlantInterface = require('./plantInterface');
require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

// ********** Instantiating DB ******************
const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const PlantsModel = plantsSchema(sequelizeDatabase, DataTypes);

// ********* JOINS Tables **************

module.exports = {
  sequelizeDatabase,
  DataTypes,
  PlantsModel,
  plantsInterface: new PlantInterface(PlantsModel),
};
