/**
 * @param {number} x
 * @return {number}
 */
/*var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};*/

var mySqrt = function(x) {
    var left = 0, right = x;
    while (left < right) {
        var mid = parseInt((left + right)/2);
        if (mid * mid === x) {
            return mid;
        }
        if (x < mid * mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return x < right * right ? right - 1 : right; 
};
