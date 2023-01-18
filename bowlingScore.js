let getStrikeScore = (frameScore, index) => {
    let strikeScore = 0;
    if (frameScore[index + 1][0] === 10) {
        //consecutive strike
        strikeScore = 20 + frameScore[index + 2][0];
    }
    else {
        //one strike
        strikeScore = 10 + frameScore[index + 1][0] + frameScore[index + 1][1];
    }
    return strikeScore;
}
let getFrameScore = (frameScore, index) => {
    let eachFrameScore = frameScore[index].reduce((acc, num) => acc + num, 0);
    if (eachFrameScore < 10) {
        //open round
        return eachFrameScore;
    }
    else if (frameScore[index][0] === 10) { //strike
        return (getStrikeScore(frameScore, index));
    }

    else if (eachFrameScore === 10) {
        //spare
        return (10 + frameScore[index + 1][0]);
    }
}

let getFrames = rolls => {
    var roundScore = {}, key = 0;
    for (let index = 0; index < rolls.length;) {
        if (rolls[index] === 10) {
            roundScore[key] = [rolls[index]];
            index++;
        }
        else {
            roundScore[key] = rolls.slice(index, index + 2);
            index += 2;
        }
        key++;
    }
    return roundScore;
}

let getGameScore = rolls => {
    let index = 0, totalScore = 0;
    if (!Array.isArray(rolls) || rolls.length === 0) {
        throw new Error('Invalid array');
    }
    var frameScore = getFrames(rolls);
    if (Object.keys(frameScore).length < 10) {
        throw new Error('Invalid');
    }
    while (index < 10) {
        totalScore += getFrameScore(frameScore, index);
        index++;
    }
    return totalScore;
}


module.exports = { getGameScore };
