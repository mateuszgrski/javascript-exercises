const palindromes = function (str) {
    strWordsNumOnly = str.toLowerCase().replace(/[^a-z0-9]/g, "").split(" ").join("")
    return strWordsNumOnly === strWordsNumOnly.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
