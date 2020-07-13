// Count the apples and oranges that fall within the range of the house
// Inputs are as follows
// s: integer denoting the starting position of the house in the x-axis
// t: integer denoting the ending position of the house in the x-axis
// a: integer denoting the location of the Apple Tree
// b: integet denoting the locatin of the Orange Tree
// apples (m), oranges (n)

// Output only the values of apples & oranges that land on the house, [m,n]

let houseParam = [7, 11] // s & t
let treeLoc = [5, 15] // a & b
// let fruit = [3, 2] length of fruit arrays
let appleRange = [-2, 2, 1]
let orangeRange = [5, -6]


applesOranges = (s, t, a, b, apples, oranges) => {
    let appleInRange = 0
    let orangeInRange = 0

    for (let i = 0; i < apples.length; i++) {
        let appleFall = a + apples[i]
        if (appleFall >= s && appleFall <= t) {
            appleInRange++
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        let orangeFall = b + oranges[i]
        if (orangeFall >= s && orangeFall <= t) {
            orangeInRange++
        }
    }

    console.log(appleInRange)
    console.log(orangeInRange)
    return [appleInRange, orangeInRange]

}


console.log(applesOranges(houseParam[0], houseParam[1], treeLoc[0], treeLoc[1], appleRange, orangeRange))