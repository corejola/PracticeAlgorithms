function repeatStringNumTimes(str, num) {
    // repeat after me
    // var posInt = Math.abs(num)
    var repeatedString = [];
    for (var i = 0; i < num; i++) {
        repeatedString.push(str)
    }
    return repeatedString.join("");
}

console.log(repeatStringNumTimes("abc", -2));