/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //  栈，后进先出
        let arr = [];
        for(let i=0; i<s.length; i++){
           if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
    //         收集的左括号
               arr.push(s[i]);
    //         右括号   
           }else{
    //      一开始就是右括号      
               if(arr.length === 0){
                   return false;
               }else{
    //             左括号数组的最后一项   
                   let last = arr[arr.length - 1];
                   if(last === "(" && s[i] === ")" || last === "[" && s[i] === "]" || last === "{" && s[i] === "}"){
                       arr.pop();
                   }else{
                       return false;
                   }
               }
           } 
        }
           return arr.length === 0;
    };