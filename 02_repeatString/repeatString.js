const repeatString = function (word, reps) {
    if (reps < 0) {
        return "ERROR";
    }

    let repeatedWord = "";
    for (let index = 0; index < reps; index++) {
        repeatedWord += word;
    }

    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
