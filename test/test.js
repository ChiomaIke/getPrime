(function() {
  'use strict';

  var expect = require('expect');
  var myApp = require('../app/library.js');

describe('getPrime', function() {  
    describe('case for an integer value n as argument', function() {
        
        it('should return the prime numbers in an array', function() {
            expect(primeArr(5,3,7,11,)).to.be.equal(5,3,7,11);
        });

        it('should return prime numbers from 0 to n with asymptotic analysis', function() {
            expect(primeArr(100)).to.be.equal(' prime less than 100);
        });
       
    });
})();

 