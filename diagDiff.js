// given a 3x3 matrix, find the diagonal difference


let sqr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

let sqr2 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

function diagDiff(arr) {
    let output = 0
    let n = arr.length

    let primeDiag = 0
    let secondDiag = 0
    for (let i = 0; i < n; i++) {
        primeDiag += arr[i][i]
        secondDiag += arr[n - 1 - i][i]
        // console.log(secondDiag)
    }
    // console.log(primeDiag)



    output = Math.abs(primeDiag - secondDiag)

    console.log(output)
    return output
}


diagDiff(sqr)
diagDiff(sqr2)
