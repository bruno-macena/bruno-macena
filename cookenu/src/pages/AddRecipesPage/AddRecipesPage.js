import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import Typography  from "@material-ui/core/Typography";
import { RecipeContainer, ScreenContainer } from './styled'
import AddRecipesForm from './AddRecipesForm'
const AddRecipePage = () => {
    useProtectedPage()
    return (
        <ScreenContainer>
        <RecipeContainer>
          <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
          <AddRecipesForm/>
        </RecipeContainer>
      </ScreenContainer>
    )
}

export default AddRecipePage