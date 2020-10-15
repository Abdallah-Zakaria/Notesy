'use strict';
require('@code-fellows/supergoose');

const Collection = require('../lib/moduls/history-collection')
const Note = new Collection();

describe('History-collection module', () => {
  it('create a valid note', () => {
    const obj = { payload: 'Test note', action: 'add', category: 'Work' };
    return Note.create(obj).then((record) => {
      Object.keys(obj).forEach((key) => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });
  it('get a valid note', () => {
    const obj = { action: 'list', payload: 'school', category: undefined };
    return Note.get(obj).then((record) => {
      record.forEach((item) => {
        Object.keys(obj).forEach((key) => {
          expect(item[key]).toEqual(obj[key]);
        });
      });
    });
  });
  it('delete a note', () => {
    const obj = {action: 'delete',payload: '5f8777394f687511cd66271d',category: false};
    Note.delete(obj).then((id) => {
      expect(id).toEqual(obj.payload)
    });
  });
});
