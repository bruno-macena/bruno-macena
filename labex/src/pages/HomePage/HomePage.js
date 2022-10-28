import React from 'react'
import { goToListTripsPage, goToLoginPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import { ButtonsContainer } from "./styled"

const HomePage = () => {
    const history = useHistory()
    return (
        <>
            <h1>LabeX</h1>
            <ButtonsContainer>
                <button onClick={() => goToListTripsPage(history)}>Ver Viagens</button>
                <button onClick={() => goToLoginPage(history)}>Área de Admin</button>
            </ButtonsContainer>
        </>
    )
}

export default HomePage
