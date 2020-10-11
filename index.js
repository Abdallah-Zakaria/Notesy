#!/usr/bin/env node
"use strict";

const input = require("./lib/input.js")
const handler = require("./lib/notes.js")

const newInput  = new input()
const newHandler = new handler()

newHandler.execute(newInput)
