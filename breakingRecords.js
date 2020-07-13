// Breaking Records Algorithm, determine how many times the base record is broken, over record & under the record
// Input is an array of scores
// Output is an 2 index array Output = ["breaking most points records","breaking least points records"]

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

// function takes in an input of scores
breakingRecords = (scores) => {
    // Max & Min scores are determined by index[0] of the input
    let max = scores[0]
    let min = scores[0]
    // variables to store the max/min scores
    let maxCount = []
    let minCount = []

    // loop through the scores input
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            if (!maxCount.includes(scores[i])) {
                if (scores[i] < maxCount[maxCount.length - 1]) { }
                else {
                    maxCount.push(scores[i])
                }
            }
        }

        if (scores[i] < min) {
            if (!minCount.includes(scores[i])) {
                if (scores[i] > minCount[minCount.length - 1]) { }
                else {
                    minCount.push(scores[i])
                }

            }
        }
    }
    console.log(maxCount)
    console.log(minCount)

    // index[0] sets the base line
    // if the next index is less than index[0], this value is a minCount and will be pushed into the minCount array
    // if the number is already in the minCount array it will do nothing
    // if the next index is greater than index[0], this value is a maxCount and will be pushed into the maxCount array
    // if the the next index is greater than the index[0] but less than the previous maxCount, do not add to maxCount
    // if the number is already in the maxCount array it will do nothing


    // fun a count of items in the maxCount & minCount arrays, the counts value will be returned
    return [maxCount.length, minCount.length]

}


let scores2 = [40, 35, 21, 36, 10, 28, 35, 5, 24, 42]
console.log(breakingRecords(scores2))
// my output [1,8]
// expected output [4,0]