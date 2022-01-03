import ScoreHistory from './board/ScoreHistory'
import PlayBord from './board/GameProcess'
import React, { useState } from 'react'
import useLocalStorage from '../utilities/hooks/useLoacalStorage'
import { setArrayToPersist } from '../utilities/utils'

export default function GamePage({ playerName, restart }) {

    const [currentScore, setCurrentScore] = useState(0)
    const [finalScores, setFinalScores] = useLocalStorage('finalScores')

    const handleScore = (points) => {
        setCurrentScore(prev => prev + points)
    }
    const handleFinal = () => {

        setFinalScores(setArrayToPersist(finalScores, currentScore))
    }

    return (
        <>
            <ScoreHistory playerName={playerName} currentScore={currentScore} finalScores={finalScores} />
            <PlayBord restart={restart} handleScore={handleScore} handleFinal={handleFinal} />
        </>
    )
}
