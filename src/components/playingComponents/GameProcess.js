import React from 'react'
import '../../App.css'
import { useEffect, useState, useRef, createRef } from "react"
import Circle from './Circle'
import { createCircles, shuffleArray } from '../../utilities/utils'

export default function GameProcess({ restart, handleScore }) {

    const [circles] = useState(() => createCircles())
    const [shuffledArray] = useState(() => shuffleArray())
    const [circlesToLight, setCirclesToLight] = useState(() => [circles[shuffledArray[0]]])
    const elementsRef = useRef(circles.map(() => createRef()));
    const [round, setRound] = useState(1)
    const [clickPerRound, setClickPerRound] = useState(0)

    useEffect(() => {
        luminate()
    }, [])

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
        return id == circlesToLight[clickPerRound].id
    }

    const isNext = () => {
        let clilcksNeeded = round
        let clicksPerformed = clickPerRound + 1

        return clilcksNeeded == clicksPerformed
    }

    const moveToNextRound = () => {
        setCirclesToLight(prev => [...prev, circles[shuffledArray[round]]])
        setRound(prev => prev + 1)
        setClickPerRound(0)
    }

    const gameFailed = () => {
        console.log('game ended')
        restart()
    }
    const luminate = () => {
        console.log(circlesToLight)
        if (circlesToLight) {
            circlesToLight.forEach(({ id }) => {
                let circleTolum = elementsRef.current.find(elem => elem.current.id == id).current
                circleTolum.style.background = 'blue'
                setTimeout(() => {
                    circleTolum.style.background = 'red'
                }, 2000);
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