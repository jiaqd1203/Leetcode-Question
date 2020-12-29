/**
 * @param {number} n
 * @return {number}
 */
// 斐波那契数列f(n)=f(n-1)+f(n-2)，特征方程x^2=x+1
//x1=(1+√5)/2，x2=(1-√5)/2
// f(n)=1/√5 * {[(1+√5)/2]^n - [(1-√5)/2]^n}
/*var climbStairs = function(n) {
    const sqrt5 = Math.sqrt(5);
    const fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
    return Math.round(fibn / sqrt5);
};*/

// 动态规划Dynamic programming（DP）
var climbStairs = function(n){
    var dp = [];
    dp[0]=1;
    dp[1]=1;
    for(var i=2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}