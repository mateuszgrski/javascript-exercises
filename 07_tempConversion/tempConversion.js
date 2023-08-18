const convertToCelsius = function(tempInFahrenheit) {
    let tempInCelsius = ((tempInFahrenheit - 32) * (5/9)) // F to C Formula
    return Math.round(tempInCelsius * 10) / 10 // Rounded to 1 decimal
};

const convertToFahrenheit = function(tempInCelsius) {
    let tempInFahrenheit = (tempInCelsius * (9/5) + 32) // C to F Formula
    return Math.round(tempInFahrenheit * 10) / 10 // Rounded to 1 decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
