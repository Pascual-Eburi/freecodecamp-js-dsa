function palindrome(str) {
    if(!str || str.length <= 0 ) return false;
    let filter = /[a-zA-Z0-9]/; let strFiltered = '';  

    for (let char of str){
      if(char.match(filter)){ 
        strFiltered += (isNaN(char)) ? char.toLowerCase() : char;
      }
    }
  
    let reversed = strFiltered.split('').reverse().join('');
    return compareChars(strFiltered, reversed);
  }
  
  function compareChars(a, b){
    if(a.length != b.length) return false;
    for(let i = 0; i <a.length; i++){
      return (a.substring(i) !== b.substring(i)) ? false: true;

    }
  }
  
  
 console.log(palindrome("sees"));