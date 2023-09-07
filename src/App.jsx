import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./views/Home.jsx";
import { SkeletonTheme } from 'react-loading-skeleton';
import CountryDetails from "./components/CountryDetails.jsx";

function App() {
  return (
      <SkeletonTheme baseColor="#D2D2D2" highlightColor="#fff">
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path="/country/:name" element={<CountryDetails />} />
              </Routes>
          </BrowserRouter>
      </SkeletonTheme>

  )
}

export default App
