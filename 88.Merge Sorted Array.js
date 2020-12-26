/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);
    for(var i=0;i<n;i++){
        nums1.push(nums2[i]); 
    }
    nums1.sort(function(a,b){
        return a-b; 
    })
    return nums1;
};*/

/*var merge = function(nums1, m, nums2, n) {
//     initialise nums1
    nums1.splice(m);
    nums1.push(...nums2);
    nums1.sort((a,b) => a-b);
};*/

var merge = function(nums1, m, nums2, n){     
    var len1 = m - 1;
    var len2 = n - 1;
    var len = m + n - 1;
    while(len1 >= 0 && len2 >= 0){  
        //在num1和num2 中取最大值写入num1尾部
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]; 
    }
        //如果num2上方循环达到临界值后num2中还有数 则复制过来 num1则不需要担心比如[5,6,7,0,0,0] [1,2,3]
        for(var i = 0; i<=len2;i++){
            nums1[i] = nums2[i];
        }
  }