function compress(str = "") {
    if(str.length < 2) return str;

    let prew = str[0];
    let counter = 1;
    let result = "";

    for(let i = 1; i < str.length; i++) {
        curr = str[i];
        if(prew != curr) {
            result += `${prew}${counter}`;
            counter = 1;
            prew = curr;
        }
        else {
            counter++;
        }
    }

    result += `${prew}${counter}`;

    return result.length < str.length ? result : str;
}

console.log(compress("aabcccccaaa"))