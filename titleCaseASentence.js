function titleCase(str) {
    var strArr = str.toLowerCase().split(" ");

    strArr.forEach(function (element) {
        console.log(element)
        var splitElement = element.split("")
        var toUpper = splitElement[0].toUpperCase();

        console.log(splitElement)
    })

    console.log(strArr)

    return strArr;
}

titleCase("I'm a little tea pot");