// Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.


birthdayCandles = (arr) => {
    let tallestCandles = Math.max(...arr)
    console.log(tallestCandles)
    let blownCandles = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === tallestCandles) {
            blownCandles += 1
        }
    }
    console.log(blownCandles)
    return blownCandles
}




let sample = [3, 2, 1, 3]
// return 2

birthdayCandles(sample)