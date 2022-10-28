import React from "react"
import { CardContainer, ButtonsContainer } from './styled'
import { decideCandidate } from '../../services/requests'

const CandidateCard = (props) => {
    const { id, applicationText, profession, age, name, country } = props.candidate

    const decide = (decision) => {
        decideCandidate(props.tripId, id, decision, props.getTripDetails)
    }

    return (
        <CardContainer>
            <p><b>Nome:</b> {name}</p>
            <p><b>Profissão:</b> {profession}</p>
            <p><b>Idade:</b> {age}</p>
            <p><b>País:</b> {country}</p>
            <p><b>Texto de Candidatura:</b> {applicationText}</p>
            <ButtonsContainer>
                <button onClick={() => decide(true)}>Aprovar</button>
                <button onClick={() => decide(false)}>Reprovar</button>
            </ButtonsContainer>

        </CardContainer>
    )
}

export default CandidateCard