'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.checkAction(args) ? Object.keys(args)[1] : false;
    if (this.action) {
      this.payload = this.checkPayload(args) ? args[this.action] : false;
    }
    this.category = this.checkCategory(args) ? Object.values(args)[0][1] : false
  }
  checkAction(obj) {
    if (obj === undefined) {
      return undefined;
    } else {
      const arrValues = Object.keys(obj);
      if (arrValues.length > 2) {
        return false;
      } else if (Object.keys(obj)[1] === 'a' || Object.keys(obj)[1] === 'add' || Object.keys(obj)[1] === 'list') {
        return true;
      } else {
        return undefined;
      }
    }
  }
  checkPayload(note) {
    if (note === undefined) {
      return undefined;
    } else {
      const actNote = (note[this.action]);
      if (actNote.length > 0) {
        return actNote;
      } else {
        return false;
      }
    }
  }
  checkCategory(obj) {
    if (Object.values(obj)[0][1] && Object.values(obj)[0][0] === '–category') {
      return true
    } else if (Object.keys(obj)[1] === 'list') {
      return true
    } else {
      console.log('Wrong call for the category action')
      return false
    }
  }
  valid() {
    return this.action && this.payload;
  }
}

module.exports = Input;

