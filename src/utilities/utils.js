
const numberOfCircles = 6
//export const shuffledArray = []
export function createCircles() {

    let createdCircles = []
    for (let index = 0; index < numberOfCircles; index++) {

        createdCircles.push({
            id: index + 1,
        });
    }
    return createdCircles
}

export function shuffleArray() {
    let arrayToShuffle = createArray()
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
    }
    return arrayToShuffle
}

function createArray() {
    let arrayOfIndexes = []
    for (let index = 0; index < numberOfCircles; index++) {
        arrayOfIndexes.push(index)
    }
    return arrayOfIndexes
}

export function setArrayToPersist(finalScores, currentScore) {

    if (finalScores) {
        let newFinalScores = finalScores
        newFinalScores.forEach((score, index) => {
            if (currentScore > score) {
                newFinalScores.splice(index, 0, currentScore)
            } else {
                newFinalScores.push(currentScore)
            }
        });
        return JSON.stringify(newFinalScores)
    } else {
        return JSON.stringify([currentScore])
    }

}