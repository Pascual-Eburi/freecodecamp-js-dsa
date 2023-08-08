function convertToRoman(num) {
    // equivalences between Arabic and Romans numerals
    const equivalences = {1: 'I',4: 'IV',5: 'V',9: 'IX',10: 'X',40: 'XL',50: 'L',90: 'XC',100: 'C',400: 'CD',500: 'D',900: 'CM', 1000: 'M'}
    // convert the numbrer to string and split it 
    let numString = num.toString().split('');
    // It will multiply the elements of the numbrer converted in to string
    let multiply = 1; 
    // it will store all the numbers position value according to their position on the original num
    // example: 120 => 100 + 20
    let numbersPosition = [];

    //
    for (let i = numString.length -1; i >= 0; i--){
        // we don´t want to add 0 values to the array of numbers position
        if(numString[i] != 0){ numbersPosition.push(numString[i] * multiply); }
        // increase the multiply factor, so we can get units, tens, hundreds and so on
        multiply = (multiply == 1)? multiply+9 : multiply * 10;
    }

    // reverse the array so, we can get the array on the correct order
    numbersPosition = numbersPosition.reverse();
    let converted_num = [];
    for(let k= 0; k < numbersPosition.length; k++){
        let position_value = numbersPosition[k];
        // the current numbrer does not have dirrect conversion, so it´s time to make the conversion
        if(equivalences[position_value] === undefined){
            // the current number will be on numbersPosition at index k
            // fn findNumberConversion(number, equivalences)
            let conversion = findNumberConversion(numbersPosition[k], equivalences)
            converted_num.push(conversion)
        }else{
            converted_num.push(equivalences[position_value])
        }
        
    }
    return converted_num.join('');
}


function findNumberConversion(number, equivalences){
    let pairs = {};
    // it wil indicatte if we can repeat the same leter for represent the number value
    // ex: 30 => it target is X(10) and we can repeat X 3 times
    let repeat = number.toString().split('')[0];

    Object.keys(equivalences).forEach(equivalence =>{
        // only we want those pairs where number minus equivalence > 0
        // we don´t want negative values
        if(number - equivalence > 0 ) pairs[equivalence] = number - equivalence   
    })
    // get the key which has the minimun diference value, so it´s the target
    let key = Object.keys(pairs).reduce((key, v) => pairs[v] < pairs[key] ? v : key);

    // if we can repeat the same letter up to 3 times and maximum 
    if(repeat <= 3){
        let conversion = '';
        // so repeat the  same letter 
        for(let x = 1; x <= repeat ; x++){ conversion += equivalences[key] };
        return conversion;

    }else{
        let difference = number - key;
        const hasConversion = [1, 10, 100, 1000];
        let conversion = '';
        conversion = (hasConversion.includes(difference)) ? equivalences[difference] : findNumberConversion(difference, equivalences)

        return equivalences[key]+conversion
    }
    
}



/**
 * 
 */
 console.log(convertToRoman(2) ,'=> II')
 console.log( convertToRoman(3),  '=> III.')
 console.log( convertToRoman(4),  '=> IV.')
 console.log( convertToRoman(5) == 'V',  '=> V')
 console.log( convertToRoman(9) == 'IX',  '=> IX')
 console.log( convertToRoman(12) == 'XII',  '=> XII')
 console.log( convertToRoman(16) == 'XVI',  '=> XVI')
 console.log( convertToRoman(29) == 'XXIX',  '=> XXIX')
 console.log( convertToRoman(44) == 'XLIV',  '=> XLIV')
 console.log( convertToRoman(45) == 'XLV',  '=> XLV')
 console.log( convertToRoman(68) == 'LXVIII',  '=> LXVIII')
 console.log( convertToRoman(83) == 'LXXXIII',  '=> LXXXIII')
 console.log( convertToRoman(400) == 'CD',  '=> CD')
 console.log( convertToRoman(500) == 'D',  '=> D')
 console.log( convertToRoman(501) == 'DI',  '=> DI')
 console.log( convertToRoman(1000) == 'M',  '=> M')
 console.log( convertToRoman(1004) == 'MIV',  '=> MIV')
 console.log( convertToRoman(1006) == 'MVI',  '=> MVI')
 console.log( convertToRoman(1023) == 'MXXIII',  '=> MXXIII')
 console.log( convertToRoman(2014) == 'MMXIV',  '=> MMXIV')
 console.log( convertToRoman(97),convertToRoman(97) == 'XCVII',  '=> XCVII')
 console.log( convertToRoman(99) == 'XCIX',  '=> XCIX')
 console.log( convertToRoman(798) == 'DCCXCVIII',  '=> DCCXCVIII')
 console.log( convertToRoman(891) == 'DCCCXCI',  '=> DCCCXCI')
 console.log( convertToRoman(3999) == 'MMMCMXCIX',  '=> MMMCMXCIX')
console.log( convertToRoman(649),convertToRoman(649) == 'DCXLIX',  '=> DCXLIX')
//console.log(convertToRoman(749));