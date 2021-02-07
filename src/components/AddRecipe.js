import React from "react";
import { useForm } from "react-hook-form";

const AddRecipe = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div id="AddRecipe">
            <div className="container-sm" id="addRecipeForm">
                <h3 className="addRecipeTitle">Add Recipe</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="strMealThumb">Image:</label>
                    <input
                        type="text"
                        name="recipeImage"
                        id="recipeImage"
                        className="form-control"
                        placeholder="Enter image path"
                        ref={register({
                            validate: (value) => value.length !== 0
                        })}
                    ></input>
                    {errors.recipeImage && (
                        <div className="errors" id="errors">
                            {"Image Path is required!!"}
                        </div>
                    )}

                    <label htmlFor="strMeal">Recipe Name</label>
                    <input
                        type="text"
                        name="recipeName"
                        id="recipeName"
                        className="form-control"
                        placeholder="Enter Name"
                        ref={register({
                            validate: (value) => value.length !== 0
                        })}
                    ></input>
                    {errors.recipeName && (
                        <div className="errors" id="errors">
                            {"Recipe Name is reqiured!!"}
                        </div>
                    )}

                    <label htmlFor="strInstructions">Recipe Instructions</label>
                    <input
                        type="text"
                        name="recipeInstructions"
                        id="recipeInstructions"
                        className="form-control"
                        placeholder="Enter Recipe Instructions"
                        ref={register({
                            validate: (value) => value.length !== 0
                        })}
                    ></input>
                    {errors.recipeInstructions && (
                        <div className="errors" id="errors">
                            {"Recipe Instructions are reqiured!!"}
                        </div>
                    )}

                    <label htmlFor="strCategory">Category</label>
                    <input
                        type="text"
                        name="recipeCategory"
                        id="recipeCategory"
                        className="form-control"
                        placeholder="Enter Category"
                        ref={register({
                            validate: (value) => value.length !== 0
                        })}
                    ></input>
                    {errors.recipeCategory && (
                        <div className="errors" id="errors">
                            {"Recipe Category is reqiured!!"}
                        </div>
                    )}

                    <label htmlFor="strArea">Area</label>
                    <input
                        type="text"
                        name="recipeArea"
                        id="recipeArea"
                        className="form-control"
                        placeholder="Enter Area"
                        ref={register({
                            validate: value => value.length !== 0
                        })}
                    ></input>
                    {errors.recipeArea && (
                        <div className="errors" id="errors">
                            {"Recipe Area is reqiured!!"}
                        </div>
                    )}

                    <div className="d-flex flex-row justify-content-center align-item-center">
                        <button type="submit" className="btn btn-success">
                            Submit
                        </button>
                        <button type="reset" className="btn btn-danger ml-2">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;
