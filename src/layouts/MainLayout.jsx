import React from 'react'
import Header from '../componets/header/Header'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default MainLayout