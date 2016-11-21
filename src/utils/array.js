define(function (require) {

    var number = require('./number');
    var objToString = Object.prototype.toString;
    // var zrUtil = require('zrender/core/util');

    /**
     * Get the size of a array
     * @param  {Array} data
     * @return {Array}
     */
    function size (data) {
        var s = [];
        while (isArray(data)) {
            s.push(data.length);
            data = data[0];
        }
        return s;
    }

    /**
     * @param {*}  value
     * @return {Boolean}
     */
    function isArray(value) {
        return objToString.call(value) === '[object Array]';
    }

    /**
     * Test whether index is an integer number with index >= 0 and index < length
     * when length is provided.
     * @param  {number} index  zero-based index
     * @param  {number} length
     */
    function validateIndex(index, length) {
        if (!number.isNumber(index) || !number.isInteger(index)) {
            throw new TypeError('Index must be an integer');
        }
        if (index < 0 || (typeof length === 'number' && index >= length)) {
            throw new Error();
        }
    }

    /**
     * Resize a multidimension array, the resize array is returned.
     * @param  {Array} array               array to be resized.
     * @param  {Array.<number>} size       new size of each dimension.
     * @param  {number} [defaultValue=0]   value to be filled in new entries,
     *                                     zero by default.
     * @return {Array}                     the resized array.
     */
    // function resize(array, size, defaultValue) {
    //     if (!isArray(array) || !isArray(size)) {
    //         throw new TypeError('array expected');
    //     }
    //     if (size.length === 0) {
    //         return array;
    //     }
    //     zrUtil.each(size, function (value) {
    //         if (!number.isNumber(value) || !number.isInteger(value) || value < 0) {
    //             throw new TypeError('Invalid size, must contain positive integers');
    //         }
    //     });

    //     var _defaultValue = (defaultValue !== undefined) ? defaultValue : 0;

    //     //recursively resize the array
    //     _resize(array, size, 0, _defaultValue);

    //     return array;
    // }

    /**
     * Recursively resize a multi dimensional array.
     * @param  {Array.<number>} array        array to be resized
     * @param  {Array.<number>} size         new dimension of the array
     * @param  {number} dim                  current dimension
     * @param  {number} defaultValue         value to be filled in new entries
     *
     * @private
     */
    // function _resize (array, size, dim, defaultValue) {
    //     var oldLen = array.length;
    //     var newLen = size[dim];
    //     var minLen = Math.min(oldLen, newLen);

    //     array.length = newLen;

    //     if (dim < size.lenght -1) {
    //         //non-last dimension
    //         var dimNext = dim + 1;
    //         var elem;

    //         //resize existing child arrays
    //         for (var i = 0; i < minLen; ++i) {
    //             elem = array[i];
    //             if (!isArray(elem)) {
    //                 elem = [elem];
    //                 array[i] = elem;
    //             }
    //             //resize child array
    //             _resize(elem, size, dimNext, defaultValue);
    //         }
    //         //create new child arrays
    //         for (i = minLen; i < newLen; ++i) {
    //             elem = [];
    //             array[i] = elem;
    //             //resize new child array
    //             _resize(elem, size, dimNext, defaultValue);
    //         }
    //     }
    //     else {
    //         //last dimension
    //         //remove dimensions of existing values
    //         for (i = 0; i < minLen; ++i) {
    //             while (isArray(array[i])) {
    //                 array[i] = array[i][0];
    //             }
    //         }
    //         //fill all the new elements with default value
    //         for (i = minLen; i < newLen; ++i) {
    //             array[i] = defaultValue;
    //         }
    //     }
    // }

    /**
     * constructs a (m x n) array with all values 0
     * @param  {number} m  the row
     * @param  {number} n  the column
     * @return {Array}
     */
    function zeros (m, n) {
        var zeroArray = [];
        for (var i = 0; i < m ; i++) {
            zeroArray[i] = [];
            for (var j = 0; j < n; j++) {
                zeroArray[i][j] = 0;
            }
        }
        return zeroArray;
    }

    /**
     * Sums each element in the array
     * @param  {Array} vector
     * @return {number}
     */
    function sum (vector) {
        var sum = 0;
        for (var i = 0; i < vector.length; i++) {
            sum += vector[i];
        }
        return sum;
    }

    /**
     * Computes the sum of the specified column elements in a two-dimensional array
     * @param  {Array.<Array>} dataList  two-dimensional array
     * @param  {number} n  the specified column, zero-based
     * @return {number}
     */
    function sumInColumn (dataList, n) {
        var sum = 0;
        for (var i = 0; i < dataList.length; i++) {
            sum += dataList[i][n];
        }
        return sum;
    }

    var array = {
        size: size,
        isArray: isArray,
        validateIndex: validateIndex,
        // resize: resize,
        zeros: zeros,
        sum: sum,
        sumInColumn: sumInColumn
    };

    return array;

});