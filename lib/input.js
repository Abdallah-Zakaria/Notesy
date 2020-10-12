'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.checkAction(args) ? 'add' : false;
    if (this.action) {
      this.payload = this.checkPayload(args) ? (args.a) || (args.add) : false;
    }
  }
  checkAction(obj) {
    if (obj === undefined) {
      return undefined;
    } else {
      const arrValues = Object.keys(obj);
      if (arrValues.length > 2) {
        return false;
      } else if (arrValues.includes('a') || arrValues.includes('add')) {
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
      const actNote = (note.a) || (note.add);
      if (actNote.length > 0) {
        return actNote;
      } else {
        return false;
      }
    }
  }
  valid() {
    return this.action && this.payload;
  }
}

module.exports = Input;

