function findLongestWordLength(str) {
    // split string (by " ") into an array
    var strSplit = str.split(' ');
    // empty array for longest string
    var longestStr = "";
    // compare each strSplit[i] to the next with the log if [a] > [b] then push to longestStr
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestStr.length) {
            longestStr = strSplit[i]
        }
    }
    return longestStr.length;
};

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));