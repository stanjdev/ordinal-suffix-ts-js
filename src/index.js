var ordinalSuffix = function (number) {
    var numString = String(number);
    if (number % 100 === 11 ||
        number % 100 === 12 ||
        number % 100 === 13) {
        numString += 'th';
    }
    else if (number % 10 === 1) {
        numString += 'st';
    }
    else if (number % 10 === 2) {
        numString += 'nd';
    }
    else if (number % 10 === 3) {
        numString += 'rd';
    }
    else {
        numString += 'th';
    }
    return numString;
};
module.exports = ordinalSuffix;
