require('../lib/core_extensions.js');
jest.dontMock('../lib/core_extensions.js');

describe('Array Flatten', function() {
    it('should flatten an array one level', function() {
        var test_array = [[1,2,3], [4,5,6], [7,8,9]];
        var flattend = test_array.flatten();
        expect(flattend).toEqual([1,2,3,4,5,6,7,8,9]);
    });
    it('should make sure all elements in the array are equal', function() {
        var test_array = [1,1,1];
        expect(test_array.allSame()).toBe(true);
    });

    it('should transpose an array', function() {
       var testArray = [[1,2,3],[4,5,6],[7,8,9]];
        var transposed = testArray.transpose();
        var expected = [[1,4,7],[2,5,8],[3,6,9]];
        expect(transposed).toEqual(expected);
    });

});

describe('Arry AllEmpty', function() {

    it('should return true if all elements of the array are empty', function() {
        expect(['', ''].allEmpty()).toBe(true);
    });

});

// Trying to test randomness is tricky
//describe('Array Shuffle', function() {
//    it('should shuffle an array', function() {
//        expect([1,2].shuffle()).toEqual([1,2]);
//    });
//});
