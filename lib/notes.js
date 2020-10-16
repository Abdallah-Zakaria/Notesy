'use strict';
const Notes = require('./moduls/history');
const mongoose = require('mongoose');

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
      // console.log(`Adding Note: ${obj.payload}`);
      // console.log(`Action: ${obj.action}`);
      // console.log(`category: ${obj.category}`);
      // console.log(`ID: ${obj.id}`);
    } else {
      console.log('Wrong action');
      mongoose.disconnect();
    }
  }
  async save(obj) {
    const record = new Notes(obj);
    await record.save();
    console.log('note saved This is fun');
    await mongoose.disconnect();
  }
  async list(obj) {
    let array;
    if (obj.payload === false) {
      array = await Notes.find({});
    } else {
      array = await Notes.find({ 'category': obj.payload });
    }
    array.forEach(item => {
      console.log(item.payload)
      console.log(`Category: ${item.category} ID: ${item.id}`)
      console.log('--------------------------')
    })
    mongoose.disconnect();
  }
  delete(obj) {
    Notes.findByIdAndDelete(obj.payload)
      .then(() => {
        console.log(`Deleted Note ${obj.payload}`)
        mongoose.disconnect();
      })
  }
}


module.exports = Handler;

