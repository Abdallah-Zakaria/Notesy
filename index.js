#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js')
const Handler = require('./lib/notes.js')
const mongoose = require('mongoose');
require('dotenv').config('.env');
const MONGODB_URI = process.env.MONGODB_URI


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});




const newInput = new Input()
const newHandler = new Handler()
newHandler.execute(newInput)

