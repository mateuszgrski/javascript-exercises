const removeFromArray = function(array, ...args) {
    array.forEach(
        (arrayElement) => {
        if (args.includes(arrayElement)){
            array.splice(array.indexOf(arrayElement), 1)
            console.log(array)
        }
    })
    return array
};



// Do not edit below this line
module.exports = removeFromArray;
