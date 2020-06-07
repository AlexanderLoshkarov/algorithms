function isUniqChars(str = "") {
    let prevDiffsCounter = 0;
    const unicodeA = "a".charCodeAt(0);
    for(let i = 0; i < str.length; i++) {
        let unicodeAtI = str.charCodeAt(i);
        
        const diff = unicodeAtI - unicodeA;

        if(prevDiffsCounter & 1 << diff) return false;

        prevDiffsCounter |= 1 << diff;
    }
    return true;
}

console.log(isUniqChars("abu"));
var t;