'use strict';
const mongoose = require('mongoose');

const notes = mongoose.Schema({
  payload: { type: 'string', required: true },
  action: { type: 'string', required: true },
  category: { type: 'string', required: false }
});

module.exports = mongoose.model('notes' , notes);
