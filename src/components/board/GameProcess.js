import { useEffect, useState, useRef, createRef } from "react"
import { createCircles, shuffleArray } from '../../utilities/utils'
import Circle from './Circle'
import React from 'react'
import '../../App.css'

export default function GameProcess({ restart, handleScore, handleFinal }) {

    const [circles] = useState(() => createCircles())
    const [shuffledArray] = useState(() => shuffleArray())
    const [circlesToLight, setCirclesToLight] = useState(() => [circles[shuffledArray[0]]])
    const elementsRef = useRef(circles.map(() => createRef()));
    const [round, setRound] = useState(1)
    const [clickPerRound, setClickPerRound] = useState(0)

    useEffect(() => {
        luminate()
    }, [circlesToLight])

    const handleClick = ({ target }) => {
        if (checkClick(target.id)) {
            if (isNext()) {
                handleScore(10)
                moveToNextRound()
            } else setClickPerRound(prev => prev + 1)
        } else gameFailed()
    }

    const checkClick = (id) => {
        return Number(id) === circlesToLight[clickPerRound].id
    }

    const isNext = () => {
        let clilcksNeeded = round
        let clicksPerformed = clickPerRound + 1

        return clilcksNeeded === clicksPerformed
    }

    const moveToNextRound = () => {
        if (round === circles.length) {
            luminate()
            setTimeout(() => {
                gameWon()
            }, 1500);
            return
        }
        setCirclesToLight(prev => [...prev, circles[shuffledArray[round]]])
        setRound(prev => prev + 1)
        setClickPerRound(0)
    }
    const gameWon = () => {
        handleFinal()
        alert('game won!')
        restart()
    }

    const gameFailed = () => {
        handleFinal()
        alert('game ended')
        restart()
    }

    const luminate = () => {
        //Time between two illuminations 
        let interval = 1000
        if (circlesToLight) {
            circlesToLight.forEach(({ id }, index) => {
                setTimeout(() => {
                    let circleTolum = elementsRef.current.find(elem => Number(elem.current.id) === id).current
                    circleTolum.style.background = 'blue'
                    setTimeout(() => {
                        circleTolum.style.background = 'red'
                    }, 2000);
                }, index * interval);

            })
        }
    }

    return (
        <>
            <ul className='circles-container'>
                {circles.map((circle, index) => <Circle key={index} handleClick={handleClick} circle={circle} anyRef={elementsRef.current[index]} />)}
            </ul>
        </>
    )
}