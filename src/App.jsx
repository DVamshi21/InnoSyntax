import { useState } from 'react'

import styles from'./App.module.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
 

  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />

    </div>
  )
}

export default App
