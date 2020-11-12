function wrongArgError(message) {
    this.message = message;
}

const capitalize = (string) => {
    if (typeof string == 'string') {
        capString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        return capString;
    } else {
        return 'Argument must be a String!'
    }
}


module.exports = capitalize;