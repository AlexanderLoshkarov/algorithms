module.exports.getCharCode = function(str = "a") {
    if(str.length != 1) throw "Invalid Argument Exception";

    return str.charCodeAt(0);
};