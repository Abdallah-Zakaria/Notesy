'use strict';

const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(()=>{
  return {add: 'note',}
});

describe('InputClass file', ()=>{
  describe('Check Action method', ()=>{
    it('Test to check if the action is written', ()=>{
      const options = new Input;
      expect(options.checkAction()).toBeUndefined();
    });
    it('Test to check if the action is written but have wrong syntax', ()=>{
      const options = new Input;
      expect(options.checkAction('foo')).toBeFalsy();
    });
    it('Test to check tha action is validate', ()=>{
      const options = new Input;
      const args = {add: 'test'}
      expect(options.checkAction(args)).toBeTruthy();
    });
  });
  describe('Check the Payload note', () =>{
    it('Test check if the note is not defiend ', ()=>{
      const options = new Input;
      expect(options.checkPayload()).toBeUndefined();
    });
    it('Test to check the note is validate ', ()=>{
      const options = new Input;
      const args = {add: 'test'};
      expect(options.checkPayload(args)).toEqual(args.add);
    });
  });
  describe('valid the arguments', () =>{
    it('Test to check if the argument was pass in correct way', () =>{
      const options = new Input;
      expect(options.valid()).toBeTruthy();
    });
    it('Test pass wrong argument to check', () =>{
      const options = new Input;
      options.action = undefined;
      options.payload = undefined;
      expect(options.valid()).toBeFalsy();
    });
  });
});
