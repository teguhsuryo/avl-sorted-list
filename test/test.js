'use strict';

var expect = require('chai').expect;
var avlSortedList = require('../index');

describe('avl-sorted-list', function() {
	var N = 1000000;
	var list = avlSortedList(function(a, b) {
		return a - b;
	});
	
    it('should sort numbers and convert to array', function() {
		for(var i = N ; i > 0 ; i--) {
			list.insert(i);
		}

		var arr = [];
		for(var i = 1 ; i <= N ; i++) arr.push(i);

		var resultList = JSON.stringify(list.toArray());
		var resultArr = JSON.stringify(arr);		
        expect(resultList).to.equal(resultArr);
    });
    
    it('should get list size', function() {
        expect(list.size()).to.equal(N);
    });
    
    it('should get minimum element', function() {
        expect(list.min()).to.equal(1);
    });
    
    it('should get maximum element', function() {
        expect(list.max()).to.equal(N);
    });
    
	it('should get odd elements', function() {
		var arr = [];
		var oddElements = [];
		for(var i = 0 ; i < N ; i+=2) {
			arr.push(i + 1);
			oddElements.push(list.at(i));
		}
		
		var resultOddElements = JSON.stringify(oddElements);
		var resultArr = JSON.stringify(arr);
        expect(resultOddElements).to.equal(resultArr);
    });
    
    it('should get lower bound index of element', function() {
		list.insert(1);
		list.insert(1);
        expect(list.lowerBound(1)).to.equal(0);
    });
    
    it('should get upper bound index of element', function() {
        expect(list.upperBound(1)).to.equal(3);
    });
    
    it('should count element', function() {
        expect(list.count(1)).to.equal(3);
    });
    
    it('should remove element', function() {
		list.remove(1);
        expect(list.count(1)).to.equal(2);
    });
    
    it('should remove element at determined index', function() {
		list.removeAt(1);
        expect(list.count(1)).to.equal(1);
    });
});
