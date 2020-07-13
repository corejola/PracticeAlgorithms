function compareTriplets(a, b) {
    //initial conditions
    let score = []
    let scoreA = 0
    let scoreB = 0

    //loop through a & compare with b based on the conditions set above

    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            scoreA++
        }
        if (a[i] < b[i]) {
            scoreB++
        }
        if (a[i] === b[i]) {
            console.log("no points for either")
        }
    }
    console.log(scoreA)
    console.log(scoreB)
    score.push(scoreA)
    score.push(scoreB)

    return score
}


let a = [5, 6, 7]
let b = [3, 6, 10]

console.log(compareTriplets(a, b))