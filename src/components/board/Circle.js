
import '../../App.css'
export default function Circle({ handleClick, circle, anyRef }) {

    return (
        <div ref={anyRef} id={circle.id} className={'circle'} onClick={(e) => handleClick(e)}>

        </div>
    )
}
