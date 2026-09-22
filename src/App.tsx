import './App.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "./stores/store.ts";


function App() {
    const recipes = useSelector((state : RootState)=> state.recipesThumbnail.recipes)

    return (
        <>
            <h1>Risch Martin</h1>
            <div className="recipes-grid">
                {recipes.map((recipe) => (
                    <Link
                        className="recipe-link"
                        to={`/recipedetails/${recipe.id}`}
                    >
                        <div className="recipe-card">
                            <h2>{recipe.name}</h2>
                            <p>Temps de préparation : {recipe.prepTimeMinutes} min</p>
                            <img src={recipe.image} alt={recipe.name} />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default App