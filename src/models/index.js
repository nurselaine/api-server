'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const plantsSchema = require('./plant.schema');
const potSchema = require('./pot.schema');
const ModelInterface = require('./ModelInterface');

const DATABASE_URL = process.env.DATABASE_URL;

// const DATABASE_URL = process.env.NODE_ENV === 'test'
//   ? 'sqlite:memory'
//   : process.env.DATABASE_URL;

// ********** Instantiating DB ******************
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// new Sequelize(DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     }
//   }
// });

const PlantsModel = plantsSchema(sequelizeDatabase, DataTypes);
const PotsModel = potSchema(sequelizeDatabase, DataTypes);

// ********* JOINS Tables **************

module.exports = {
  sequelizeDatabase,
  DataTypes,
  PlantsModel,
  plantsInterface: new ModelInterface(PlantsModel),
  PotsModel,
  potsInterface: new ModelInterface(PotsModel),
};
