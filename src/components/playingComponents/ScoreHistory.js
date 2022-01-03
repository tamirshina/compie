import ScoreTable from './ScoreTable'
import useLocalStorage from '../../utilities/hooks/useLoacalStorage'

export default function ScoreHistory({ playerName, score }) {

    const [scores, setScores] = useLocalStorage('scores')
    const [highestScore, setHighestScore] = useLocalStorage('highestScore')

    const handleHighestScore = () => {

        console.log(highestScore)

        if (score > highestScore) {
            setHighestScore(score)
            return score
        }
        return highestScore
    }

    return (
        <nav>
            <ul>
                <li>{playerName + 'current score ' + score}  </li>
                <li>{new Date().toLocaleString()}</li>
                <ScoreTable scores={scores} highestScore={handleHighestScore} />
            </ul>
        </nav>
    )
}
