const reverseString = (string) => {
    reversedString = string.split('').reverse().join('');
    return reversedString;
}

module.exports = reverseString;