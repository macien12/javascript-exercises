const sumAll = function(array1, array2) {
    if (array1 < 0 || array2 < 0 || typeof array1 !== 'number' || typeof array2 !== 'number' || !Number.isInteger(array1) || !Number.isInteger(array2)) {
        return 'ERROR';
    }
    let sum = 0;
    let min = Math.min(array1, array2);
    let max = Math.max(array1, array2);
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;     

};

// Do not edit below this line
module.exports = sumAll;