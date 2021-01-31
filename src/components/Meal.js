import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Meal = ({ meal: {
    strMealThumb,
    strMeal,
    strInstructions,
    strCategory,
    strArea
} }) => {
    return (
        <div>
            <div className="container-sm bg-light" id="meal-container">
                <div className="meal d-flex flex-column">
                    <div className="meal-img">
                        <img src={strMealThumb} alt={strMeal} />
                    </div>
                    <div className="meal-details">
                        <h3 className="meal-title">{strMeal}</h3>
                        <p className="meal-instructions">
                            {strInstructions.substring(0, 200) + "..."}
                        </p>
                        <ul className="meal-info">
                            <li>
                                Category:
                                <strong>{strCategory}</strong>
                            </li>
                            <li>
                                Area:
                                <strong>{strArea}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="btn btn-warning" id="showRecipeBtn">Show Recipe</button>
            </div>
        </div>
    );
}

export default Meal;