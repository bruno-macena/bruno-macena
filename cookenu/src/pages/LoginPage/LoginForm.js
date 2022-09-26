import React, { useState } from "react"
import { InputsContainer, LoginFormContainer } from "./styled"
import { login } from "../../services/user"
import { useNavigate } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import useForm from "../../hooks/useForm"
import CircularProgress from "@material-ui/core/CircularProgress"

const LoginForm = ({ setRightButtonText }) => {
    const [ form, onChange, clear ] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setRightButtonText, setIsLoading)
    }

    return (
        <LoginFormContainer>
        <form onSubmit={onSubmitForm}>
                    <InputsContainer>
                    <TextField
                        value={form.email}
                        name={"email"}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        type={"email"}
                        fullWidth
                        required
                        margin={"normal"}
                        />
                    <TextField
                        value={form.password}
                        name={"password"}
                        onChange={onChange}   
                        label={"Senha"}
                        variant={"outlined"}
                        type={"password"}
                        fullWidth
                        required
                        margin={"normal"}
                        />
                        </InputsContainer>
                    <Button
                        color={"primary"}                        
                        variant={"contained"}
                        type={"submit"}
                        fullWidth
                    >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>}
                    </Button>
                </form>
            </LoginFormContainer>
    )
}

export default LoginForm 