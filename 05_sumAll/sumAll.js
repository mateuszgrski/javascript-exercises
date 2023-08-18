const sumAll = function(minNumber, maxNumber) {

    if (minNumber < 0 ||
        maxNumber < 0 ||
        typeof minNumber != "number" ||
        typeof maxNumber != "number")
        return "ERROR"

    if (minNumber > maxNumber){
        const temporaryNumber = minNumber
        minNumber = maxNumber
        maxNumber = temporaryNumber
    }

    let sum = 0
    for (let currentNumber = minNumber; currentNumber <= maxNumber; currentNumber++){
        sum += currentNumber
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
