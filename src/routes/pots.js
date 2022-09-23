'use strict';

const { potsInterface } = require('../models');

const express = require('express');
const router = express.Router();

router.post('/pots', async (req, res, send) => {
  // create a pot to DB
  const response = await potsInterface.create(req.body);
  res.status(200).send(response);
});

router.get('/pots', async (req, res, send) => {
  // gets all pot data
  const response = await potsInterface.read();
  res.status(200).send(response);
});

router.get('/pots/:id', async (req, res, send) => {
  // gets one pot data
  const response = await potsInterface.read(req.params);
  res.status(200).send(response);
});

router.put('/pots/:id', async (req, res, send) => {
  // Updates a pot from DB
  const { id } = req.params;
  const response = await potsInterface.update(req.body, id);
  res.status(200).send(response);
});

router.delete('/pots/:id', async (req, res, send) => {
  // Deletes a pot from DB
  const { id } = req.params;
  const message = await potsInterface.delete(id);
  res.status(200).send(message);
});

module.exports = router;
