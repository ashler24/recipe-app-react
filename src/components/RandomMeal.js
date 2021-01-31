import React, { useState, useEffect } from 'react';
import Meal from './Meal';

const RandomMeal = (props) => {
    const [meal,setMeal] = useState(undefined);
    useEffect( () =>{
        
        async function getMeals() {
            const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await res.json();
            console.log(data);
            setMeal(data.meals[0]);
        }
        
        getMeals();

    },[]);

    if(!meal) return null;

    return(
        <div>
            <div id="featuredMealDiv" className="d-flex justify-content-center">
                <h2>Featured Meal</h2>
            </div>
            <div className="container-sm">
                <Meal meal={meal} />
            </div>
            <div className="d-flex justify-content-center m-1 p-2"><h2>More Recipes</h2></div>
            <div className="container">
                <Meal meal={meal} />
                <Meal meal={meal} />
                <Meal meal={meal} />
                <Meal meal={meal} />
            </div>
        </div>
    );
}

export default RandomMeal;