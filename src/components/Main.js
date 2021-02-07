import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Header from './Header'
import RandomMeal from './RandomMeal'
import AddRecipe from './AddRecipe'
import { BsPlusCircle } from 'react-icons/bs'
import ShowRecipe from './ShowRecipe'


const AddRecipeBtn = () => (
    <div id="addRecipeBtnWrapper">
        {/* <button id="addRecipeBtn" className="btn btn-outline-danger"><span><BsPlusCircle /></span>&nbsp;Add Recipe</button> */}
        <span><BsPlusCircle /></span>
    </div>
)

const Main = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={RandomMeal} />
                <Route path="/addRecipe" component={AddRecipe} />
                <Route path="/showRecipe" component={ShowRecipe} />
                {/* <Redirect exact to="/" /> */}
                {/* <RandomMeal /> */}
            </Switch>
            <Link to="/addRecipe">
                <AddRecipeBtn />
            </Link>
        </div>
    )
}

export default Main;