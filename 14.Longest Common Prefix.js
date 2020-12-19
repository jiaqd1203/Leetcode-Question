/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var first = strs[0];
    var result = '';
    if(!strs.length){
       return result;
   }
    for (var i = 0; i < first.length; i++){
       for (var j =  1; j < strs.length; j++){
          if(first[i] != strs[j][i]){
               return result; 
       } 
    }
    result += first[i];
    }
    return result;
};