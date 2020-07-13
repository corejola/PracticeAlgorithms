
// It is guaranteed that each type is 1, 2, 3, 4, or 5.

// loop through the sightings array, if index = 1, push to typ1. etc up to typ 5.
// determine which type variable has longest .length...


migratingBirds = (arr) => {
    // Bird Type Constraints
    let birdType = [
        { type: 1, count: 0 },
        { type: 2, count: 0 },
        { type: 3, count: 0 },
        { type: 4, count: 0 },
        { type: 5, count: 0 }
    ];
    // Method 1, without using any higher order functions
    // determine the arr count per type and increase the count counter
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            birdType[0].count++
        }
        if (arr[i] === 2) {
            birdType[1].count++
        }
        if (arr[i] === 3) {
            birdType[2].count++
        }
        if (arr[i] === 4) {
            birdType[3].count++
        }
        if (arr[i] === 5) {
            birdType[4].count++
        }
    }

    let mostSighted = 0;
    let mostSightedType = 0
    // cycle through the object to determine the type of bird that has the highest count
    // if there are two types with the same count, choose the type with the smallest ID

    for (let i = 0; i < birdType.length; i++) {
        if (birdType[i].count > mostSighted) {
            mostSighted = birdType[i].count
            mostSightedType = birdType[i].type
        }

        if (birdType[i].count === mostSighted) {
            if (mostSightedType > birdType[i].type) {
                mostSightedType = birdType[i].type
            }
        }
    }

    return mostSightedType
}

let sample1 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]

// answer === 3
console.log(migratingBirds(sample1))
