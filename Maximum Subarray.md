/**
 * @param {number[]} nums
 * @return {number}
 */

/*
var maxSubArray = function(nums) {
//     初始值不能设为0，防止只有负数
    var sum = nums[0];
    var temp = nums[0];
    for(var i=1; i<nums.length;i++){
        if(temp < 0){
            temp = nums[i];
        }else{
            temp += nums[i];
        }
        
        if(temp > sum){
            sum = temp;
        }else{
            sum = sum;
        }        
    }
    return sum;
};
*/

var maxSubArray = function(nums){
    var sum = nums[0];
    var maxSum = nums[0];
    for(var i=1; i<nums.length;i++){
        sum = Math.max(sum + nums[i],nums[i]);
        maxSum = Math.max(maxSum,sum);    
    }
    return maxSum;
}