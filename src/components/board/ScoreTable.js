
export default function ScoreTable({ highestScore, finalScores }) {

    return (
        <>
            <div>high score is {highestScore()}</div>
            {
                finalScores && finalScores.map((score, index) => {
                    return (
                        <ul key={index + 1}>
                            <li key={index}>last score {score}</li>
                        </ul>
                    )
                })
            }
        </>

    )
}
