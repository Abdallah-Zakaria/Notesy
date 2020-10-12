#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js')
const Handler = require('./lib/notes.js')

const newInput = new Input()
const newHandler = new Handler()

newHandler.execute(newInput)

