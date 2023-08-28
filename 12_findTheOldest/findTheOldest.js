const findTheOldest = function(arr) {
    let oldest;
    return arr.reduce((oldest, current) => {
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        return oldestAge < currentAge ? current : oldest
    },)

    function getAge(birth, death){
        return (death ?? new Date().getFullYear()) - birth
    }
};

// Do not edit below this line
module.exports = findTheOldest;
