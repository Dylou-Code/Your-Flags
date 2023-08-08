import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./views/Home.jsx";
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {


  return (
      <SkeletonTheme baseColor="#D2D2D2" highlightColor="#fff">
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
              </Routes>
          </BrowserRouter>
      </SkeletonTheme>

  )
}

export default App
