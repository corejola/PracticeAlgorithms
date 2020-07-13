minMaxSum = (arr) => {
    // sum the entire array
    // loop through the array and subtract the element and push that new sum to a new array
    // do the comparison to identify the lowest and highest numbers

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }

    let fourOfFiveSum = []
    let lessSum = 0
    for (let i = 0; i < arr.length; i++) {
        lessSum = sum - arr[i]
        fourOfFiveSum.push(lessSum)
    }
    console.log(fourOfFiveSum)
    // comparison to return the min and max sum
    let max = Math.max(...fourOfFiveSum);
    let min = Math.min(...fourOfFiveSum);

    console.log(min, max)
    return minMax
}

let array = [1, 2, 3, 4, 5]
let testCase4 = [769082435, 210437958, 673982045, 375809214, 380564127]

console.log("Should return 1640793344 2199437821")
// minMaxSum(array)

minMaxSum(testCase4)