
function high(x) {
    let stringToArray = x.split(" ");
    let highestScoringWord = "";
    let highestScore = 0;


    stringToArray.map(function (word) {
        let score = wordScore(word);
        if (score > highestScore) {
            highestScore = score;
            highestScoringWord = word;
        }
    });

    return highestScoringWord;
}
function wordScore(word) {
    const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    let score = 0;
    word.split("").map(function (letter) {
        score += alphabet.indexOf(letter.toUpperCase()) + 1;
    });
    return score;

}