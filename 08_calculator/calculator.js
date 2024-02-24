const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const sum = function (array) {
    return array.reduce((total, element) => total + element, 0);
};

const multiply = function (array) {
    return array.reduce((total, element) => total * element, 1);
};

const power = function (x, y) {
    let power = 1;
    for (let i = 0; i < y; i++) {
        power *= x;
    }
    return power;
};

const factorial = function (x) {
    let factorial = 1;
    for (let i = 1; i <= x; i++) {
        factorial *= i;
    }
    return factorial;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
