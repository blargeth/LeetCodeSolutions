/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
   let string = '';
   for(let i = 0; i < str.length; i++){
      const ascii = str[i].charCodeAt();
      if(ascii >= 65 && ascii <= 90){
         string += String.fromCharCode(ascii + 32);
      }else{
         string += str[i];
      };
   };
   return string;
};