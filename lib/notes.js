'use strict';

class Handler {
  constructor() {}
  execute(newInput) {
    if (newInput === undefined){
      // this comment to prevent eslint error
    }
    else {
      if (newInput.payload === false) {
        console.log('Please enter a note');
      } else if (newInput.action) {
        let note = {
          id: 1,
          note: newInput.payload
        };
        this.add(note);
      } else {
        console.log('Wrong method, please use --add or -a');
      }
    }
  }
  add(obj) {
    console.log(`Adding Note: ${obj.note}`);
    console.log(`ID: ${obj.id}`);
  }
}


module.exports = Handler;

