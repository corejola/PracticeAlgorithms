// given a string 's', print out the number of changed letters.
// constraint s%3 === 0

marsExploration = (s) => {
    // split s into an array of "sos" string sets
    let sos = "sos"
    let splitS = s.split("")
    console.log(splitS)
    // sos is repeating [0,1,2]
    // compare the next set using the array to determine if any of the string characters === s, o, or s
    // determine the number of "sos" messages there are? s.length/3

    // or compare a baseline (based on the number of sets) to the input

}

let s = "sosspssqssor"
// will return the number 3; p, q & r were the altered characters

marsExploration(s)