import WelcomePage from './WelcomePage'
import GamePage from './GamePage'
import { useState } from "react"

export default function Game() {

    const [isPlaying, setIsPlaying] = useState(false)
    const [playerName, setPlayerName] = useState('')

    const handleNameSubmit = (name) => {
        setPlayerName(name)
        setIsPlaying(true)
    }
    const restart = () => {
        setIsPlaying(false)
    }

    return (
        <>
            {!isPlaying ? <WelcomePage handleNameSubmit={handleNameSubmit} setName={setPlayerName} /> : <GamePage playerName={playerName} restart={restart} />}
        </>
    )

}
