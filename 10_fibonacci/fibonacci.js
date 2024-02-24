const fibonacci = function (number) {
    if (number < 0) {
        return "OOPS";
    }
    if (number == 0) {
        return 0;
    }

    if (number == 1) {
        return 1;
    }

    previous = 1;
    next = 1;

    for (let i = 0; i < number - 2; i++) {
        let temp = previous + next;
        previous = next;
        next = temp;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
