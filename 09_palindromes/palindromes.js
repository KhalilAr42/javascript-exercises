const palindromes = function (word) {
    let wordWithNoPunctuation = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    let trimmedWord = wordWithNoPunctuation.replace(/ /g, "").toLowerCase();

    for (let i = 0; i < trimmedWord.length / 2; i++) {
        if (trimmedWord[i] != trimmedWord[trimmedWord.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
