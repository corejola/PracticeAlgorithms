// determine whether or not you can get the kangaroos to the same location at the same time
// both kangaroos have a starting position and a distance per jump

// Return YES if reach the same position at the same time, otherwise return NO

function kangaroo(x1, v1, x2, v2) {

    if (x2 > x1 && v2 > v1) {
        // in this condition, kangaroo 1 will never catch kangaroo 2
        console.log("NO")
    }
    else {
        let jumpX1 = x1 + v1
        let jumpX2 = x2 + v2
        let jump = 0;

        while (jump < 1000) {
            jumpX1 += v1
            jumpX2 += v2
            jump++
            console.log(`Kangaroo 1 lands at ${jumpX1}`)
            console.log(`Kangaroo 2 lands at ${jumpX2}`)

            if (jumpX1 === jumpX2) {
                console.log("YES")
                console.log(`Jump Count: ${jump}`)
                break;
            }
            else if (jump === 1000) {
                console.log("NO")
            }

        }
    }
}


// jump 1 = starting position + distance 
// jump 2 = jump 1 + distance
// jump 3 = jump 2 + distance
// need to perform the same number of jumps and land at the same position

// Input 2564 5393 5121 2836
// Expected Output YES
let x1 = 2564
let v1 = 5393
let x2 = 5121
let v2 = 2836


kangaroo(x1, v1, x2, v2)
