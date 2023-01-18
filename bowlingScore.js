function calculateScore(roundScore) {
    let index = 0;
    let eachRoundScore, totalScore = 0;

    while (index < 10) {
        eachRoundScore = roundScore[index].reduce((acc, num) => acc + num, 0);

        if (eachRoundScore <= 10) {//open round
            totalScore += eachRoundScore;
        }
        else if (roundScore[index][0] === 10 && roundScore[index + 1][0] === 10) {
            //consecutive strike
            totalScore += 20 + roundScore[index + 1][0];
        }
        else if (roundScore[index][0] === 10 && roundScore[index + 1][0] !== 10) {
            //strike
            totalScore += 10 + roundScore[index + 1][0] + roundScore[index + 1][0];
        }
        else if (roundScore[index][1] === 10) {
            //spare
            totalScore += 10 + roundScore[index + 1][0];
        }

        index += 1;

    }
    return totalScore;

}

function score(rolls) {
    if (!Array.isArray(rolls) || rolls.length === 0) {
        throw new Error('Invalid array');
    }
    console.log(rolls.length)
    let roundScore = {};
    for (let index = 0; index < rolls.length;) {
        if (Object.keys(roundScore).length === 9) {
            roundScore[9] = rolls.slice(index,);
            break;
        }
        if (rolls[index] === 10) {
            roundScore[index] = [rolls[index]];
            index++;
        }
        else {
            roundScore[parseInt(index / 2)] = rolls.slice(index, index + 2);
            index += 2;
        }
    }
    if (Object.keys(roundScore).length != 10) {
        throw new Error('Invalid');
    }

    return calculateScore(roundScore);
}

var rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
// var rolls=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
console.log(score(rolls));

module.exports = { score };