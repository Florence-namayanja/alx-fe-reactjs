import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
