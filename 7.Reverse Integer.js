/**
 * @param {number} x
 * @return {number}
 */
/*无效(反转后溢出才return0)
var reverse = function(x) {
     if(x > (Math.pow(2,31)-1) || x < (Math.pow(-2,31)+1)){
            return 0;
     }else{
    toString()converts the given number into a String
      split() converts the String into an Array of characters
      reverse()reverses the order of the items in the array 
      join('') reassembles the reversed characters into a String
      parseFloat() converts into a float from a String
      x * Math.sign(x) multiplies the number with the sign of the original number provided
    
            return parseFloat(x.toString().split('').reverse().join(''))*Math.sign(x);
     }    
};
*/

var reverse = function(x) {
    let y =  parseFloat(x.toString().split('').reverse().join(''))*Math.sign(x);
    return (y > (Math.pow(2,31)-1) || y < (Math.pow(-2,31)+1))?0:y;
};