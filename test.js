var expect = require('chai').expect;
var remove = require('./index.js');

describe('tests for checkign removal of index from orderd array', function() {
  it('should return array without all ouccurances of element 3 in orderd form', function() {
    expect(remove([1, 2, 3, 4, 3], 3)).to.eql([1, 2, 4]);
  });

  it('should return array without all ouccurances of element "c" in orderd form', function() {
    expect(remove(['c', 'b', 'c', 'd'], 'c')).to.eql(['b', 'd']);
  });
});
