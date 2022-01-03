import { useState, useEffect } from 'react'

function getInitialValue(key) {
    const item = window.localStorage.getItem(key)

    if (item !== null) {
        return JSON.parse(item)
    }

}

export default function useLocalStorage(key, value) {

    const [score, setScore] = useState(() => getInitialValue())

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))

    }, [value])

    return [score, setScore]
}