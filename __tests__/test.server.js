'use strict';

const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models');
const { app } = require('../src/server');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('API server tests', () => {
  test('Handles bad routes', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('Create a plant', async () => {
    const response = await request.post('/plants').send({
      name: 'tester',
      family: 'test',
      experienceLevel: 'easy',
    });
    const responseTwo = await request.post('/plants').send({
      name: 'tester 2',
      family: 'test 2',
      experienceLevel: 'medium',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.family).toEqual('test');
    expect(response.body.experienceLevel).toEqual('easy');
    expect(responseTwo.status).toEqual(200);
    expect(responseTwo.body.name).toEqual('tester 2');
    expect(responseTwo.body.family).toEqual('test 2');
    expect(responseTwo.body.experienceLevel).toEqual('medium');
  });

  it('Reads all plant data', async () => {
    const response = await request.get('/plants');
    // console.log(`response.body ${response.body.length}`)
    expect(response.status).toEqual(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].name).toEqual('tester');
    expect(response.body[0].family).toEqual('test');
    expect(response.body[0].experienceLevel).toEqual('easy');
    expect(response.body[1].name).toEqual('tester 2');
    expect(response.body[1].family).toEqual('test 2');
    expect(response.body[1].experienceLevel).toEqual('medium');
  });

  it('Reads one plant data', async () => {

    const response = await request.get('/plants/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.family).toEqual('test');
    expect(response.body.experienceLevel).toEqual('easy');
  });

  it('Updates a plant', async () => {
    const response = await request.put('/plants/1').send({
      name: 'tester 1',
      family: 'test 1',
      experienceLevel: 'medium',
    });
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('tester 1');
    expect(response.body.family).toEqual('test 1');
    expect(response.body.experienceLevel).toEqual('medium');
  });

  it('Deletes a plant', async () => {
    const response = await request.delete('/plants/2');

    expect(response.status).toBe(200);
    expect(response.text).toEqual('Record Deleted');
  });
});
