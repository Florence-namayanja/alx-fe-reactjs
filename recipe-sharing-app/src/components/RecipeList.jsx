import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes yet!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} className="mb-4 p-3 border rounded shadow">
            <h3 className="text-xl font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
