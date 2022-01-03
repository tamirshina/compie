import useLocalStorage from '../utilities/hooks/useLoacalStorage'
import { setArrayToPersist } from '../utilities/utils'
import ScoreHistory from './board/ScoreHistory'
import PlayBord from './board/GameProcess'
import React, { useState } from 'react'

export default function GamePage({ playerName, restart }) {

    const [currentScore, setCurrentScore] = useState(0)
    const [finalScores, setFinalScores] = useLocalStorage('finalScores')
    const [highestScore, setHighestScore] = useLocalStorage('highestScore')

    const handleHighestScore = () => {
        let highScore = highestScore ? highestScore : 0
        if (currentScore > highScore) {
            setHighestScore(currentScore)
            return currentScore
        }
        return highScore
    }

    const handleScore = (points) => {
        setCurrentScore(prev => prev + points)
    }
    const handleFinal = () => {
        setFinalScores(setArrayToPersist(finalScores, currentScore))
    }

    return (
        <>
            <ScoreHistory playerName={playerName} currentScore={currentScore} finalScores={finalScores} handleHighestScore={handleHighestScore} />
            <PlayBord restart={restart} handleScore={handleScore} handleFinal={handleFinal} />
        </>
    )
}
