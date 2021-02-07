import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { MdRestaurantMenu, MdPlace } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';


const InstructionsList = ({ instructionString }) => {
    console.log(instructionString);

    const instructions = instructionString.split('.');
    console.log(instructions);
    return (
        instructions.map((item, i) => (
            <li key={i}>{item}</li>)
        )
    )
}

const ShowRecipeCard = ({ recipe: {
    idMeal,
    strMealThumb,
    strMeal,
    strInstructions,
    strCategory,
    strArea,
    strIngredient1,
    strIngredient2,
    strIngredient3
} }) => {

    return (
        <div className="container-sm" id="recipeWrapper">
            <div className="recipeTitleWrapper">
                <h3 className="recipeTitle">{strMeal}</h3>
            </div>
            <div className="recipeImageWrapper">
                <img className="recipeImg" src={strMealThumb} alt={strMeal} />
            </div>
            <div className="categoryAndAreaWrapper">
                <div className="recipeCategory"><span><MdRestaurantMenu /></span>Category:{strCategory}</div>
                <div className="recipeArea ml-5"><span><MdPlace /></span>Area:{strArea}</div>
            </div>
            <div className="recipeInstructionsWrapper">
                <Toast>
                    <ToastHeader>
                        <h4>Instructions</h4>
                    </ToastHeader>
                    <ToastBody>
                        <ul className="recipeInstructions">
                            <InstructionsList instructionString={strInstructions} />
                        </ul>
                    </ToastBody>
                </Toast>
                {/* <div className="ingredientsWrapper"> */}
                    <Toast>
                        <ToastHeader>
                            <h4>Ingredients</h4>
                        </ToastHeader>
                        <ToastBody className="ingredientsWrapper">
                            <button type="button" className="btn btn-primary">
                                <span><IoFastFoodOutline /></span>{strIngredient1}
                            </button>
                            <button type="button" className="btn btn-primary">
                                <span><IoFastFoodOutline /></span>{strIngredient2}
                            </button>
                            <button type="button" className="btn btn-primary">
                                <span><IoFastFoodOutline /></span>{strIngredient3}
                            </button>
                        </ToastBody>
                    </Toast>
                {/* </div> */}
            </div>
        </div>

    )
}


const ShowRecipe = () => {

    let locationObj = useLocation();
    const [recipeByIdData, setRecipeByIdData] = useState(undefined);
    const [recipeId, setRecipeId] = useState(locationObj.state.idMeal);
    const getRecipeByIdUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
    useEffect(() => {
        async function getRecipeById() {
            const res = await fetch(getRecipeByIdUrl);
            const data = await res.json();
            console.log(data);
            setRecipeByIdData(data.meals[0]);
            console.log(recipeByIdData);
        }

        getRecipeById();

    }, [])

    if (!recipeByIdData) return null;

    return (
        <div id="showRecipe">
            {recipeId}
            {/* <Meal meal={recipeByIdData} /> */}
            <ShowRecipeCard recipe={recipeByIdData} />
        </div>
    )
}


export default ShowRecipe;