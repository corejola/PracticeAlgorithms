// write a function that will chunk an array based on a sizing number

chunkArray = (arr, n) => {
    let chunkdArray = []
    for (let i = 0; i < arr.length; i++) {
        chunkdArray.push(arr.splice(i, n, arr[i]))
    }
    console.log(chunkdArray)
    return chunkdArray;
}

let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
let n = 3


chunkArray(array, n)