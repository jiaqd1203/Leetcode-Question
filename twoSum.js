/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*var twoSum = function(nums, target) {

    for(var i = 0;i<nums.length;i++){
        for(var j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return([i,j]);
            }
        }
    }
   // return[];
};*/

var twoSum = function(nums, target) {
 
    for(let i =0;i<nums.length;i++){
     let index = nums.indexOf(target-nums[i]);
//         如果不匹配就返回-1
        if(i!=index&&index!=-1){
            return ([i,index])
        }
 }
  
};