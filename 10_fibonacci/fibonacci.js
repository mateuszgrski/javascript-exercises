const fibonacci = function(num) {
    if (num < 0) return "OOPS"

    const arr = [1, 1]

    for (let i = 0; i < num; i++){
        let firstNum = arr[arr.length - 2]
        let secNum = arr[arr.length - 1]
        arr[arr.length] = firstNum + secNum
    }
    return arr[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;
