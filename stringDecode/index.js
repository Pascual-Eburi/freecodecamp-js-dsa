/**
 * 
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str){
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLocaleLowerCase();
    // store key value pairs of every alpha char decode char: something like meanings
    // example: key => 'N', value => 'A'; meaning of N will be A
    let decode_dic = new Map; 
    let places = 13; //letters are shifted by 13 places
    let targetIndex = 0; // index of the target 
    // make decoded diccionary based on key value pais
    for(let i = 0; i < alphabet.length; i++){
        // get target index son we can set it on the map object
        targetIndex = (places < alphabet.length) ? places : places - alphabet.length;
        places + i;
        // set the target index with it´s conrrespond character decoded
        decode_dic.set( alphabet[targetIndex], alphabet[i]);
    }

    let decoded_str = '';
    //decode the given string
    for(let char of str.toLocaleLowerCase()){
        // only decode letters
        decoded_str += (char.match(/[a-zA-Z]/)) ? decode_dic.get(char) : char;
        
    }
    
    return decoded_str.toUpperCase();
}


console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR PBQR PNZC" )) //should decode to the string FREE CODE CAMP
console.log(rot13("SERR CVMMN!" )) //should decode to the string FREE PIZZA!
console.log(rot13("SERR YBIR?" )) //should decode to the string FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." )) 
//should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
/**
 */