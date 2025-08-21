import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json"; // adjust path if different

const RecipeDetail = () => {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // find recipe by id
    const foundRecipe = data.find((r) => r.id.toString() === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-red-500">Recipe not found.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>

      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}

      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">Instructions</h2>
      <p className="whitespace-pre-line">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
