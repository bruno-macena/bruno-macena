import React from "react"
import { CardContainer } from './styled'

const TripCard = (props) => {
    const {name, description, planet, durationInDays, date} = props.trip

    return(
        <CardContainer>
            <p><b>Nome:</b> {name}</p>
            <p><b>Descrição:</b> {description}</p>
            <p><b>Planeta:</b> {planet}</p>
            <p><b>Duração:</b> {durationInDays}</p>
            <p><b>Data:</b> {date}</p>
        </CardContainer>
    )
}

export default TripCard