import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-4">
        <Outlet /> {/* This is where child route components will render */}
      </main>
      <Footer />
    </>
  )
}
