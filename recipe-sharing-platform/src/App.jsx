import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'



function App() {
  const handleAddRecipe = (recipe) => {
    console.log('New recipe added:', recipe)

  };
  

  return (
    <>
      <div>
        <h1 className='text-3x1 fontbold text-blue-500'> hi tailwind</h1>
         <HomePage/>
      </div>
      <Router>
        <Routes>
          <Route path ='/' element={<HomePage />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
        </Routes>
      </Router>
      <div>
        <AddRecipeForm onAddRecipe={handleAddRecipe} />
      </div>
    </>
  )
}

export default App
