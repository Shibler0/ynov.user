import { useNavigate, useParams } from "react-router-dom";
import recipeData from "../assets/recipes.json";
import '../recipe-details.css';

type Recipe = {
    id: number;
    name: string;
    image: string;
    ingredients: string[];
    instructions: string[];
};

function RecipeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recipe: Recipe | undefined = recipeData.recipes.find(
        (r: Recipe) => r.id === Number(id)
    );

    if (!recipe) {
        return <p>Recette introuvable</p>;
    }

    return (
        <>
            <button onClick={() => navigate(-1)}>
                ⬅️ Retour
            </button>

            <h1>{recipe.name}</h1>

            <div className="recipe-top">
                <img
                    className="recipe-image"
                    src={recipe.image}
                    alt={recipe.name}
                />

                <div>
                    <h2>Ingrédients</h2>

                    <ul className="ingredients-list">
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <h2>Étapes</h2>

            <ol className="instructions-list">
                {recipe.instructions.map((instruction) => (
                    <li key={instruction}>{instruction}</li>
                ))}
            </ol>
        </>
    );
}

export default RecipeDetails;