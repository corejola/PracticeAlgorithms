function largestOfFour(arr) {

    var largestNum = [];

    for (var i = 0; i < arr.length; i++) {
        var tempMax = arr[i][0];

        for (var j = 0; j < arr[i].length; j++) {

            var currentElement = arr[i][j];
            if (currentElement >= tempMax) {
                tempMax = currentElement;
            };

        };
        largestNum.push(tempMax);
    };
    return largestNum;
};

// console.log("Largest Numbers from the array are: " + largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// answer is [5, 27, 39, 1001]
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));





// function largestOfFour(arr) {
//     var finalArray = [];
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < 4; j++) {
//             if (arr[i][j] > finalArray[i] || j == 0) {
//                 finalArray[i] = arr[i][j];
//             };
//             return finalArray;
//         };
//     };
// };

// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])