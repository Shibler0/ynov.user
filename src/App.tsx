import './App.css'
import recipeData from "./assets/recipes.json";
import {Link} from "react-router-dom";

type RecipeThumbnail = {
    id : number;
    name: string;
    prepTimeMinutes: number;
    image: string;
};

function App() {
    const recipes: RecipeThumbnail[] = recipeData.recipes;

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