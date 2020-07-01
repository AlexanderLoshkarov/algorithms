function checkPermutaion(str1 = "", str2 = "") {
    if(str1.length != str2.length) return false;

    const lettersHash = [];
    for(let i = str1.length -1; i >= 0; i--)
    {
        if(isNaN(lettersHash[str1.charCodeAt(i)])) lettersHash[str1.charCodeAt(i)] = 0;
        else lettersHash[str1.charCodeAt(i)]++;
    }

    for(let i = str2.length -1; i >= 0; i--) {
        const count = lettersHash[str2.charCodeAt(i)]--;
        if(isNaN(count) || count < 0) return false;
    }

    return true;
}

var res = checkPermutaion("test", "sett");
console.log(res);