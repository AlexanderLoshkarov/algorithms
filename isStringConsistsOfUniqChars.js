const { getCharCode } = require('./util.js');

function isUniqChars(str = "") {
    let bitMap = 0;

    const charCodeA = getCharCode("a"); //"a".charCodeAt(0);

    for(let i = 0; i < str.length; i++) {
        let charCodeIth = getCharCode(str[i]); //str.charCodeAt(i);
        
        const diff = charCodeIth - charCodeA;

        //console.log(`diff = ${diff}`)

        //console.log(`if( ${bitMap.toString(2)} & ${(1 << diff).toString(2)} )`);

        const mask = 1 << diff;

        if(bitMap & mask) return false;

        bitMap |= mask;
        //console.log(`prevDiffsCounter = ${bitMap.toString(2)}`);
    }
    return true;
}

console.log(isUniqChars("bcdnzb"));