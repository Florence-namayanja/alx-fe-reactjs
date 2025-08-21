import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least two ingredients (separated by commas).";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(), // temporary ID
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps,
    };

    if (onAddRecipe) {
      onAddRecipe(newRecipe); // callback to parent
    }

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Recipe Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients (comma separated)</label>
          <textarea
            rows="3"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Preparation Steps</label>
          <textarea
            rows="4"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
