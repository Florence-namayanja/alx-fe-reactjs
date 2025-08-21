import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'
function App() {
  

  return (
    <>
      
      <div className="flex justify-center items-center min-h-screen"><RegistrationForm/></div>

      <div className='flex justify-center items-center min-h-screen'><FormikForm/></div>
    </>
  )
}

export default App
