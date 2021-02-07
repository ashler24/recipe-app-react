import React, { useState, useEffect } from 'react';
import Meal from './Meal';

const RandomMeal = ( ) => {
    const [meal,setMeal] = useState([]);

    // const mockApiRecipeUrl = "https://601f7293b5a0e9001706a54b.mockapi.io/RecipeHouse/Recipes";
    const mealDBUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

    useEffect( () =>{
        
        async function getMeals() {
            const res = await fetch(mealDBUrl);
            const data = await res.json();
            console.log(data.meals[0]);
            setMeal([data.meals[0]]);
            console.log(meal);

            //  console.log(data[0]);
            //  setMeal([data[0]]);
            //  console.log(meal);
        }
        
        getMeals();

    }, []);

    if(!meal.length) return null;

    return(
        <div>
            <div id="featuredMealDiv" className="d-flex justify-content-center">
                <h2>Featured Meal</h2>
            </div>
            <div className="container-sm">
                <Meal meal={meal[0]} />
            </div>
            {/* <div className="d-flex justify-content-center m-1 p-2"><h2>More Recipes</h2></div>
            <div className="container">
                <Meal meal={meal} />
                <Meal meal={meal} />
                <Meal meal={meal} />
                <Meal meal={meal} />
            </div> */}
        </div>
    );
}

export default RandomMeal;