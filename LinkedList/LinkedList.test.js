'use strict';
const expect = require('chai').expect;
const add = require('../dist/LinkedList').add;

describe('ts-hi function test', () => {
  it('should return 2', () => {
    const result = add(1, 1);
    expect(result).to.equal(2);
  });
});