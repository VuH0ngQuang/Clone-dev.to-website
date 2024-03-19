import React from 'react'
import Header from './componets/header/Header';
import MainLayout from './layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
      </Route>
    </Routes>
  )
}

export default App;