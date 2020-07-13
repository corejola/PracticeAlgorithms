function findElement(array, func) {
    let num = 0;
    console.log("array: " + array)
    for (var i = 0; i < array.length; i++) {
        console.log("i: " + array[i])
        if (array[i] % 2 === 0) {
            num = array[i]
            return num;
        }
        //  else { 
        //    return undefined;
        //  }
    };

}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));