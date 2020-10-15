'use strict';

const mongoose = require('mongoose');
const Collection = require('./moduls/history-collection');
const Notes = new Collection();

class Handler {
  constructor() { }
  execute(newInput) {
    if (newInput === undefined || newInput.action === false) {
      mongoose.disconnect();
      console.log('Please enter a correct action');
    }
    else {
      this[newInput.action](newInput)
    }
  }
  add(newInput) {
    if (newInput.payload === false) {
      console.log('Error');
      mongoose.disconnect();
    } else if (newInput.action) {
      let obj = {
        id: 1,
        payload: newInput.payload,
        action: newInput.action,
        category: newInput.category
      };
      this.save(obj);
    } else {
      console.log('Wrong action');
      mongoose.disconnect();
    }
  }
  async save(obj) {
    await Notes.create(obj)
    mongoose.disconnect();
  }
  async list(obj) {
    await Notes.get(obj);
    mongoose.disconnect();
  }
  async delete(obj) {
    await Notes.delete(obj)
    mongoose.disconnect();
  }
}


module.exports = Handler;

