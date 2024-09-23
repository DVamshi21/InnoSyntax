import { useState } from 'react'

import styles from'./App.module.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import { Roadmap } from './components/Roadmap/Roadmap'
import Technolgies from './components/Technologies/Technolgies'

function App() {
 

  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Roadmap/>
      <Technolgies/>

    </div>
  )
}

export default App
