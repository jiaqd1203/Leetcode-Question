/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var obj ={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000  
    }
    var num = 0;
    for(var i = 0; i<s.length;i++){
        if(obj[s[i+1]] > obj[s[i]]){
         num -= obj[s[i]]   
        }else{
            num += obj[s[i]]
        }
    }
    return num;
};