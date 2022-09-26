import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import {StyledToolbar} from "./styled"
import { goToRecipesList, goToLogin } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";

const Header = ({ rightButtonText, setRightButtonText }) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    

    const logout = () => {
        localStorage.removeItem("token")
    }
    
    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    return (      
        <AppBar position="static">
            <StyledToolbar>   
                <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

 export default Header