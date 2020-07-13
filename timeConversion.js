
// take in a string in the 12-hr clock format
// return a string in the 24-hr clock format
// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

timeConversion = (t) => {

    // Process the time string component
    console.log("Convert: ", t)
    const pre = t.slice(0, 2)
    let hh = parseInt(t.slice(0, 2))
    let converted = "";
    // console.log(hh)
    // if last 2 elements in the string === "AM"
    // return that string less the "AM" time stamp

    // MIDNIGHT CONDITION
    if (t[8] === "A" && hh === 12) {
        // 00:00:00 on 24-hr clock
        converted = t.slice(0, 8).replace(pre, "00")
        console.log(converted)
    }
    // AM CONDITION
    if (t[8] === "A" && hh < 12) {
        // AM, leave as is, remove "AM"
        console.log(t.slice(0, 8))
        return t.slice(0, 8)
    }

    // NOON CONDITION
    if (t[8] === "P" && hh === 12) {

        // leave as is, remove "PM"

        converted = t.slice(0, 8)
        console.log(converted)
        
    }


    // PM CONDITION
    if (t[8] === "P" && hh < 12) {
        let conversion = parseInt(t.slice(0, 2)) + 12
        converted = t.replace(pre, conversion).slice(0, 8)
        return converted
    }

}

let test1 = "07:05:45PM";
let test2 = "12:25:32AM"
let test3 = "08:30:21AM"
let test4 = "12:00:00PM"

timeConversion(test2);
timeConversion(test3)
console.log(timeConversion(test1))
timeConversion(test4)