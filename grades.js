// Write an algorithm that returns all passing grades rounded.
// if the difference between the grade[i] & the next interval of 5 is < 3, round up to that interval
// if not, the grade will stay the same
// if the grade is < 38, no 

let grades = [73, 67, 38, 33]

// returns [75, 67, 40, 33]

function interval(test) {
    for (let i = 100; i > 30; i -= 5) {
        if (i - test < 5) {
            return i
        }
    }
}


function grading(grades) {
    let roundedGrades = []
    // determine intervals a separate function
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 37) {
            roundedGrades.push(grades[i])
        }
        else if (interval(grades[i]) - grades[i] < 3) {
            // if 75 - 73 < 3, push 75 to roundedGrades
            roundedGrades.push(interval(grades[i]))
        }
        else if (interval(grades[i]) - grades[i] > 3 || interval(grades[i]) - grades[i] === 3) {
            // if 70 - 67 = 3 , push 67 to roundedGrades
            roundedGrades.push(grades[i])
        }
    };
    console.log(roundedGrades)
    return roundedGrades;
}

// interval(71)
grading(grades)