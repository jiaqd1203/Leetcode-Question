/**
 * @param {number} n
 * @return {number}
 */
// 斐波那契数列f(n)=f(n-1)+f(n-2)，特征方程x^2=x+1
//x1=(1+√5)/2，x2=(1-√5)/2
// f(n)=1/√5 * {[(1+√5)/2]^n - [(1-√5)/2]^n}
var climbStairs = function(n) {
    const sqrt5 = Math.sqrt(5);
    const fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
    return Math.round(fibn / sqrt5);
};