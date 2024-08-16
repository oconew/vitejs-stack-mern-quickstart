import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Suspense } from 'react'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Outlet />
      </main>
    </>
  )
}
