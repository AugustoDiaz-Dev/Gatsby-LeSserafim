import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import Footer from './Footer'
import { motion} from 'framer-motion'

export default function Layout({ children }) {

  return (
      <motion.main className="layout"
        // key={router.route}
        initial="pageInitial"
        transition={{duration: 1}}
        animate="pageAnimate"
        exit="pageExit"
        variants={{
            pageInitial: {
                opacity: 0,
            },
            pageAnimate: {
                opacity: 1,
            },
           }}
      >
        <Navbar />
        <div className="content">
          {children}
        </div>
        <Footer />
      </motion.main>
  )
}