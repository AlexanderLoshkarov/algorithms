const { getCharCode } = require('./util.js');

function isPermutaionOfPalindrom(phrase = "") {

    let bitVector = createBitVector(phrase);

    return checkAtMostOneBitSet(bitVector);
}

function checkAtMostOneBitSet(bitVector = 0) {

    const mask = bitVector - 1;//if the phare is palindrome should be equal to 0;

    return (bitVector & mask)  == 0;
}

function createBitVector(phrase = "") {
    let bitVector = 0;
    for(const char of phrase) {
        const charCode = getCharCode(char); //char.charCodeAt(0);

        bitVector = toggle(bitVector, charCode);
    }

    return bitVector;
}

function toggle(bitVector = 0, charCode = 0) {
    if(charCode < 0) return bitVector;

    const mask = 1 << charCode;

    bitVector ^= mask;
    
    return bitVector;
}

const res = isPermutaionOfPalindrom("atcocta");
console.log(res);
