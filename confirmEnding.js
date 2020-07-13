function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var splitString = str.substring((str.length - target.length), str.length);

    return splitString === target;
}

// console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"))
console.log(confirmEnding("Abstraction", "action"))