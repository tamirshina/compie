import ScoreHistory from './playingComponents/ScoreHistory'
import PlayBord from './playingComponents/GameProcess'
import React, { useState } from 'react'

export default function GamePage({ playerName, restart }) {

    const [score, setscore] = useState(0)

    const handleScore = (points) => {
        setscore(prev => prev + points)
    }

    return (
        <>
            <ScoreHistory playerName={playerName} score={score} />
            <PlayBord restart={restart} handleScore={handleScore} />
        </>
    )
}
