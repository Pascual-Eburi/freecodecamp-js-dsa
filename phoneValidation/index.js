function telephoneCheck(str) {
    // valid numer contains numbers, parenthesis, dashes and spaces
    if(!(str.match(/^[0-9-() ]+$/))) return false;
    // check numbers of digits: valid 10 0r 11
    let digits = str.match(/\d/g).length;
    if(digits !== 10 && digits !== 11) return false;
    
    //check numbers of parenthesis
    let parenthesis = (str.match(/[()]/g)) ? str.match(/[()]/g).length : 0;
    if(parenthesis != 0 && parenthesis != 2) return false
    
    // check if the num is a completetly numbers
    if(/[0-9]{10}/g.test(str)) {
        let fives = (str.match(/[5]/g)) ? str.match(/[5]/g).length : 0;
        return (fives == 10) ? true : false;
    }
    let format_one, format_two;
    if(digits == 11 ){
        format_one = /^1[-\s]*[(]{0,1}[0-9]{3,3}[)]{0,1}[- ][-\s0-9]*$/g;
        format_two = /^1[(]{0,1}[0-9]{3}[)]{0,1}[0-9]{3}[-]{0,1}[0-9]/;
        return (format_one.test(str) || format_two.test(str)) ? true : false;   
    }

    if(digits == 10){
        format_one = /^[(]{0,1}[0-9]{3,3}[)]{0,1}[- ][-\s0-9]*$/g;
        format_two = /^[(]{0,1}[0-9]{3}[)]{0,1}[0-9]{3}[-]{0,1}[0-9]/;
        return (format_one.test(str) || format_two.test(str)) ? true : false;
    }
    return false;

}

    /*let format_one = /^1?[-\s]*[(]{0,1}[0-9]{3,3}[)]{0,1}[- ][-\s0-9]*$/g;
    let format_two = /^1?[(]{0,1}[0-9]{3}[)]{0,1}[0-9]{3}[-]{0,1}[0-9]/;
    if(digits == 11 && /^()/g.test(str)){return false}
    return (format_one.test(str) || format_two.test(str)) ? true : false;*/
console.log(telephoneCheck("(275)76227382") === false) 

console.log( telephoneCheck("55 55-55-555-5") === false)
console.log( telephoneCheck("11 555-555-5555") === false)
console.log( telephoneCheck("2(757)6227382") === false)
console.log( telephoneCheck("2(757)622-7382") === false)
console.log( telephoneCheck("555)-555-5555") === false)
console.log( telephoneCheck("(555-555-5555") === false)
console.log( telephoneCheck("0 (757) 622-7382") === false)
console.log( telephoneCheck("-1 (757) 622-7382") === false)
console.log( telephoneCheck("2 757 622-7382") === false)
console.log( telephoneCheck("10 (757) 622-7382") === false)
console.log( telephoneCheck("555-5555") === false)
console.log( telephoneCheck("5555555") === false)
console.log( telephoneCheck("123**&!!asdf#") === false)
console.log( telephoneCheck("55555555") === false)
console.log( telephoneCheck("2 (757) 622-7382") === false)
console.log( telephoneCheck("555-555-5555") === true)
console.log( telephoneCheck("1 555) 555-5555") === false)
console.log( telephoneCheck("555-555-5555") === true)
console.log( telephoneCheck("1 (555) 555-5555") === true)
console.log( telephoneCheck("5555555555") === true)
console.log( telephoneCheck("1 555 555 5555") === true)
console.log( telephoneCheck("1 456 789 4444") === true)
console.log( telephoneCheck("1 555-555-5555") === true)

console.log( telephoneCheck("(6054756961)") === false)
console.log( telephoneCheck("27576227382") === false)


console.log( telephoneCheck("(555)555-5555") === true)
console.log( telephoneCheck("1(555)555-5555") === true)
console.log( telephoneCheck("(555)5(55?)-5555") === false)
    //console.log(str.match(/\(\)/g) ); format_one.test(str) || format_two.test(str) || 
    //let regExp = /^1?[-\s]*[(]{0,1}[0-9]{3,3}[)]{0,1}[-\s\./0-9]*$/g;
    /*let nums = [];
    for(char of str){
        if(/[0-9]/.test(char)){
            nums.push(char);
        }
    }
    if(/(^\({1}[0-9]{3}\))/.test(str)){
        if(nums.length == 10){
            return [str, true];
        }else{
            return [str, false]
        }
    }
    let n = /^1?([\s-])|^1?\({1}[0-9]{3}\){1}/;
    if(n.test(str)){
        return [str,''];
    }
    return [str, 'ninguno']
    //return nums.length;

    /*if(/^[0-9]{10,11}/.test(str)){
        return true;
    }else{
        return false;
    }

    if(/(^\({1}[0-9]{3}\)[0-9]{10})|(^[0-9]{3})/.test(str)){
        return [str, true];
    }
    
    // len = 
    let n = /^1?([\s-])|^1?(\(?[0-9]{3}\)?|[0-9]{3}$)/;
    if(n.test(str)){
        console.log(str.length)
        let lens = [13,14,15, 16];
        return (lens.includes(str.length))?  true: false;
    }

    let f3 = /^[0-9]{10}$/
    if(f3.test(str)) return true;
    return false;*/
/**
 
-- PASSED NO PASSED



 */


/*   // (555) 
   let f2 = /(^\([0-9]{3}\)|^[0-9]{3}$)/;
   if(f2.test(str)){
       console.log(str.length)
   }*/

   // XXXXXXXXXX format
  // let formato = /^((1{1}[- ]{1})|(\([0-9]{3,3}\)|[0-9]{2}))/;

  /* 
   
   return [n.test(str), f3.test(str)];

   //let f = /^((1{1}[- ]{1})|(\([0-9]{3,3}\)|[0-9]{2}))([-' ]{1}|[0-9]{3})([-' ]{1}|[0-9]{4})/;

   return (str.match(f)) ? true: false;*/
  
  //console.log(telephoneCheck("1 (555)-555-5555"));