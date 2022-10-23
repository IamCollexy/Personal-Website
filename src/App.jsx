import React, { Fragment } from 'react'
import HomePage from './components/HomePage'
import MainNavigation from './Layout/MainNavigation'
import { Route, Routes } from 'react-router-dom';
import Me from './components/Me';
import AboutPage from './components/AboutPage';

import Footer from './Layout/Footer';


const App = () => {
return (
    <div>
       
           <MainNavigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/me-page' element={<Me/>}/>
          <Route path='/about-page' element={<AboutPage/>}/>
       </Routes> 
       
  </div>
 
 

  )
}

export default App