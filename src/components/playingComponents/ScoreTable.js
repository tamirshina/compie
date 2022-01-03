
export default function ScoreTable({ scores, highestScore }) {


    return (
        <>
            <div>high score is +{highestScore}</div>
            {
                scores.map((score, index) => {
                    return (
                        <ul key={index}>
                            <li></li>
                            <li key={index + score.name}>{score.name}</li>
                            <li key={index + score.points}>{score.points}</li>
                        </ul>
                    )
                })
            }
        </>

    )
}
