// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
function findSmallestInt(arr) {
    return Math.min(...arr);
}

// Example usage:
console.log(findSmallestInt([34, 15, 88, 2])); // Output: 2

// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

// Inputs
// Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

function rpsls(pl1, pl2) {
    if (pl1 === pl2) {
        return "Draw!";
    }

    if (
        (pl1 === "scissors" && pl2 === "paper") ||
        (pl1 === "paper" && pl2 === "rock") ||
        (pl1 === "rock" && pl2 === "lizard") ||
        (pl1 === "lizard" && pl2 === "spock") ||
        (pl1 === "spock" && pl2 === "scissors") ||
        (pl1 === "scissors" && pl2 === "lizard") ||
        (pl1 === "lizard" && pl2 === "paper") ||
        (pl1 === "paper" && pl2 === "spock") ||
        (pl1 === "spock" && pl2 === "rock") ||
        (pl1 === "rock" && pl2 === "scissors")
    ) {
        return "Player 1 Won!";
    } else {
        return "Player 2 Won!";
    }
}

// Example usage:
console.log(rpsls("rock", "scissors")); // Output: "Player 1 Won!"
// Probem took about 5 mins

// // Problem You're playing to scrabble. But counting points is hard.

// You decide to create a little script to calculate the best possible value.

// The function takes two arguments :

// `points` : an array of integer representing for each letters from A to Z the points that it pays
// `words` : an array of strings, uppercase

// You must return the index of the shortest word which realize the highest score.
// If the length and the score are the same for two elements, return the index of the first one.

function getBestWord(points, words) {
    // Handle the edge case when words array is empty
    if (words.length === 0) return -1;

    const wordScores = words.map((word, index) => {
        const score = word.split('').reduce((sum, letter) => sum + points[letter.charCodeAt(0) - 65], 0);
        return { word, score, length: word.length, index };
    });

    // Use reduce to find the object with the highest score and shortest length
    const bestWord = wordScores.reduce((best, current) => {
        if (current.score > best.score ||
            (current.score === best.score && current.length < best.length)) {
            return current;
        }
        return best;
    });

    return bestWord.index;
}
// Took a bit longer around 10 minutes

function sumOfN(n) {
    const limit = Math.abs(n) + 1;
    const sequence = [];

    for (let i = 0; i < limit; i++) {
        const term = (i * (i + 1)) / 2;
        sequence.push(n < 0 ? -term : term);
    }

    return sequence;
}
// Harder because I havent done a whole lot with loops yet
function allNines(x) {
    x = BigInt(x); // Ensure x is treated as a BigInt
    let num = 0n;
    let m = 0n;

    while (true) {
        m++;
        num = num * 10n + 9n; // Build the number consisting of m '9's
        if (num % x === 0n) {
            return m;
// Unable to Solve