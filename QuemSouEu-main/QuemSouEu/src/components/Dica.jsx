import { Fragment } from "react"


const Dica = ({person, num}) => {
    return (
        <Fragment>
            <div><p id="dica">{num}ª Dica: {person}</p></div>
        </Fragment>
        
    )
}

export default Dica