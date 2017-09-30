'use strict';

var expect = require('chai').expect;
var formater = require('../src/lib/formater-core');

describe('#initial test', function() {
    it('should convert single digits', function() {
        var result = formater(1);
        expect(result).to.equal('1');
    });
});