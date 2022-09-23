'use strict';

const express = require('express');
const { plantsInterface } = require('../models/index');

const router = express.Router();

router.post('/plants', async (req, res, send) => {
  console.log('req body', req.body);

  const newPlant = await plantsInterface.create(req.body);
  res.status(200).send(newPlant);
});

router.get('/plants', async (req, res, next) => {
  let plants = await plantsInterface.read();
  res.status(200).send(plants);
});

router.get('/plants/:id', async (req, res, next) => {
  let { id } = req.params;
  let plant = await plantsInterface.read(id);
  res.status(200).send(plant);
});

router.put('/plants/:id', async (req, res, next) => {
  let { id } = req.params;

  let plant = await plantsInterface.update(req.body, id);
  res.status(200).send(plant);
});

router.delete('/plants/:id', async (req, res, next) => {
  try {
    let { id } = req.params;
    let message = await plantsInterface.delete(id);
    res.status(200).send(message);
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
