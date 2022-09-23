'use strict';

const express = require('express');
const { plantInterface } = require('../models/plantInterface');

const router = express.Router();

router.post('/plants', async (req, res, send) => {
  console.log('req body', req.body);

  const newPlant = await plantInterface.create(req.body);
  res.status(200).send(newPlant);
});

router.get('/plants', async (req, res, next) => {
  let plants = await plantInterface.read();
  res.status(200).send(plants);
});

router.get('/plants/:id', async (req, res, next) => {
  let { id } = req.params;
  let plant = await plantInterface.read(id);
  res.status(200).send(plant);
});

router.put('/plants/:id', async (req, res, next) => {
  let { id } = req.params;

  let plant = await plantInterface.update(req.body, id);
  res.status(200).send(plant);
});

router.delete('/plants/:id', async (req, res, next) => {
  try {
    let { id } = req.params;
    let message = await plantInterface.delete(id);
    res.status(200).send(message);
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
