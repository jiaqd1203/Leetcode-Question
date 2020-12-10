/**
 * @param {number[]} nums
 * @return {number}
 */

/*var removeDuplicates = function(nums) {
    for(var i = 0;i<nums.length-1;i++){
        if(nums[i]==nums[i+1]){
//移除元素并向前移动一位指针
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};*/

var removeDuplicates = function(nums){
//     快慢双指针
    var i = 0;
    for(var j = 1;j<nums.length;j++){
        if(nums[j] != nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;    
}