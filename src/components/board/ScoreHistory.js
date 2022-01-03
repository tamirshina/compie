import ScoreTable from './ScoreTable'

export default function ScoreHistory({ playerName, currentScore, finalScores, handleHighestScore }) {

    return (
        <nav>
            <ul>
                <li>{playerName + '- current score ' + currentScore}  </li>
                <li>{new Date().toLocaleString()}</li>
                <ScoreTable highestScore={handleHighestScore} finalScores={finalScores} />
            </ul>
        </nav>
    )
}
