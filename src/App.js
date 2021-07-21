import React from 'react'
import Home from './Components/Home'

import {Switch,Route} from 'react-router-dom'
import Navbar from "./Components/Navbar.jsx"
import About from "./Components/About.jsx"
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'

const App = () => {
  return (
    <>

    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about_main" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
      
    </>
  )
}

export default App
