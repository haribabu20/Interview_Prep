//1. Program to find longest word in a given sentence ?


function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

// Example usage:
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
