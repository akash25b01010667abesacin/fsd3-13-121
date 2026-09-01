
//write a function taking number 0 to 9 and return in words using arrow function
const numberToWord = (num) =>{
    switch (num){
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "nine";
        default: return "Invalid Number";
    }
};
const rollnum = "250320101000121";
const digits = rollnum.split('').map(Number);
const words = digits.map(numberToWord);
console.log(words.join(' ')); // Output: Two Five Zero Three Two Zero One Zero One Zero Zero Zero One Two One



