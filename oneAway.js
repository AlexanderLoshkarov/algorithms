const {getCharCode} = require('./util.js');

function isOneEditAway(str1 = "", str2 = "") {
    if(Math.abs( str1.length - str2.length) > 1) return false;
    
    const [s1, s2] = str1.length < str2.length ? [str1, str2] : [str2, str1];

    let i1 = i2 = 0;

    let foundDiff = false;

    while(i2 < s2.length && i1 < s1.length) {
        if(getCharCode(s1[i1]) != getCharCode(s2[i2])) {

            if(foundDiff) return false;

            foundDiff = true;

            if(s1.length == s2.length) i1++;
        }
        else{
            i1++;
        }
        i2++;
    }

    return true;
}

const check = isOneEditAway("pale", "bal");
console.log(check);