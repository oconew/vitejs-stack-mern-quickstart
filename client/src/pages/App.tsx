import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import pathConstants from '../routes/pathConstants'
import routes from '../routes'
import Home from './Home'
import Menu from './Menu'
import Layout from '../components/Layout'
// import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: routes,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
