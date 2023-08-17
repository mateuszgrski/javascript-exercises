const repeatString = function(string, numberOfRepeats) {
    if (numberOfRepeats < 0) return "ERROR"
        let outputString = ""
        for (let i = 1; i <= numberOfRepeats; i++){
            outputString = outputString.concat(string)

        }
        return outputString
};

// Do not edit below this line
module.exports = repeatString;
