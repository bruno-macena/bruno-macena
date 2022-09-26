import React from "react";
import { Routes, Route} from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = ({setRightButtonText}) => {
    return (
        <>
            <Routes>
                    
                <Route exact path="/login" element={<LoginPage setRightButtonText={setRightButtonText} />}/> 
                     
                <Route exact path="/cadastro" element={<SignUpPage setRightButtonText={setRightButtonText} />} /> 
                    
                <Route exact path="/" element={<RecipesListPage />}/>                      
                
                <Route exact path="/adicionar-receita" element={<AddRecipesPage />}/>  

                <Route exact path="/detalhe/:id" element={<RecipeDetailPage />}/>

                <Route exact path="*" element={<ErrorPage />}/>

            </Routes>
        </>
    )
}

export default Router