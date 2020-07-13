function diagonalDifference(arr) {
    // Write your code here
    // validate that all the arrays are the same length.
    let validatedArray
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length !== arr.length) {
            console.log(`${arr[i]} is too short`)
            //splice or shit?s
            break
        }
    }
    console.log(arr)
    //     let leftDiag = arr[0][0] + arr[1][1] + arr[2][2]
    //     let rightDiag = arr[2][0] + arr[1][1] + arr[1][2]
    //     console.log(leftDiag)
    //     console.log(rightDiag)

    //     return Math.abs(leftDiag - rightDiag)
}



let matrix = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]]


console.log(`${diagonalDifference(matrix)}`)