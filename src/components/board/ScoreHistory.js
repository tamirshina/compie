import { useEffect } from 'react'
import ScoreTable from './ScoreTable'
import useLocalStorage from '../../utilities/hooks/useLoacalStorage'

export default function ScoreHistory({ playerName, currentScore, finalScores }) {


    const [highestScore, setHighestScore] = useLocalStorage('highestScore')

    const handleHighestScore = () => {
        let highScore = highestScore ? highestScore : 0
        if (currentScore > highScore) {
            setHighestScore(currentScore)
            return currentScore
        }
        return highScore
    }

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
