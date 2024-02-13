const removeFromArray = function (array, ...elements) {
    const result = array.filter((word) => elements.indexOf(word) == -1);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
