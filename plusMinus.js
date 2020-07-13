// return the ratio of the number of positive, negative & zero integers to the total number of elements

let arr = [1, 1, 0, -1, -1]
let arr2 = [-4, 3, -9, 0, 4, 1]
// 2/5 are positive, 2/5 are negative, 1/5 are zero
// return the decimal value of the ratio up to 10^-4

plusMinus = (arr) => {
    let n = arr.length
    let pos = 0;
    let neg = 0;
    let zero = 0;
    let ratios = []

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            pos += 1;
        }
        if (arr[i] < 0) {
            neg += 1;
        }
        if (arr[i] === 0) {
            zero += 1;
        }
    }

    // let posRatio = (pos / n).toFixed(5)
    // posRatio.parseInt()
    let posRatio = (pos / n).toFixed(6)
    let negRatio = (neg / n).toFixed(6)
    let zeroRatio = (zero / n).toFixed(6)

    ratios.push(posRatio)
    ratios.push(negRatio)
    ratios.push(zeroRatio)

    // console.log(ratios)
    console.log(posRatio)
    console.log(negRatio)
    console.log(zeroRatio)

}



plusMinus(arr2)