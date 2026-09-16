import { Navigate, useParams } from "react-router-dom";
import recipeData from "../assets/recipes.json";
import '../Recipe-details.css';
import BackButton from "../components/BackButton";

type Recipe = {
    id: number;
    name: string;
    image: string;
    ingredients: string[];
    instructions: string[];
};

function RecipeDetails() {
    const { id } = useParams();

    const recipeId = Number(id);

    const recipe = recipeData.recipes.find(
        (recipe: Recipe) => recipe.id === recipeId
    );

    if (!recipe) {
        return <Navigate to="/404" />;
    }

    return (
        <>
            <BackButton text="Retour" />

            <h1>{recipe.name}</h1>

            <div className="recipe-top">
                <img
                    className="recipe-image"
                    src={recipe.image}
                    alt={recipe.name}
                />

                <div className="recipe-info">
                    <h2>Ingrédients</h2>

                    <ul className="ingredients-list">
                        {recipe.ingredients.map((ingredient) => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>

                    <h2>Étapes</h2>

                    <ol className="instructions-list">
                        {recipe.instructions.map((instruction) => (
                            <li>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default RecipeDetails;