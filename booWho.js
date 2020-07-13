function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.

    // check argument passed through function is a boolean
    // if it is a boolean return true

    if (typeof bool === 'boolean') {
        return true;
    }
    else {
        return false;
    }
}
console.log(booWho(null));