'use strict';

const Handler = require('../lib/notes.js');
jest.spyOn(global.console,'log');

describe('NoteClass file', () =>{
  it('Note is empty', () =>{
    const newHandler = new Handler();
    newHandler.execute();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('Note not defiend a action ' , () =>{
    const newHandler = new Handler();
    newHandler.execute({payload:'This is a note'});
    expect(console.log).toHaveBeenCalled();
  });
  it('Teast a fully right note', () =>{
    const newHandler = new Handler();
    newHandler.execute({action:'add', payload:'This is a note'});
    expect(console.log).toHaveBeenCalled();
  });
});
