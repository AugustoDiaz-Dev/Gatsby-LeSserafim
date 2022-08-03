import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import Footer from './Footer'

export default function Layout({ children }) {

  return (
    <main className="layout">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </main>
  )
}