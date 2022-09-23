'use strict';

class PlantInterface {
  constructor(plant) {
    this.plant = plant;
  }

  async create(json) {
    // creates a new plant model instance
    console.log(`this is our json ${json}`);
    try {
      let record = await this.plant.create(json);
      return record;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }

  async read(id = null) {
    // fetches all model instances or just one depending on whether id is passed in
    try{
      let record;
      if(id){
        record = await this.plant.findOne({ where: { id }});
      } else {
        record = await this.plant.findAll();
      }
      return record;
    } catch(error){
      console.error('ERROR: ', error);
      return error;
    }
  }

  async readManyToOne(id, model){
    try{
      const response = await this.plant.findOne({where: {id}, include: model});
      return response;
    } catch (error){
      console.log('ERROR', error);
      return error;
    }
  }

  async update(data, id) {
    // updates a model instance in DB
    try{
      await this.plant.update(data, {where: { id }});
      let record = await this.plant.findOne({where: { id }});
      return record;
    } catch(error){
      console.error('ERROR: ', error);
      return error;
    }
  }

  async delete(id) {
    // removes a model instance from DB
    try{
      await this.plant.destroy({where: {id}});
      return 'Record Deleted';
    } catch(error){
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = PlantInterface;
