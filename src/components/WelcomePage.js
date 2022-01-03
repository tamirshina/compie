import { useState } from "react"
import '../App.css'
export default function StartScreen({ handleNameSubmit }) {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()
        handleNameSubmit(name)
    }
    return (
        <form className="form-control" onSubmit={(e) => handleSubmit(e)}>
            <input value={name} type="text" placeholder="Enter Name" onChange={(event) => setName(event.target.value)}></input>
            <button type='submit'>Start</button>
        </form>
    )
}
