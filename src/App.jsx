import React from 'react'
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from './components/RootLayout';
import InspirationDetails from './pages/InspirationDetails';
import OrebiDetails from './pages/OrebiDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/inspirationdetails" element={<InspirationDetails/>} ></Route>
      <Route path="/orebidetails" element={<OrebiDetails />} ></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
