import './App.css'
import React, { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import SKills from './components/skills'
import Contact from './components/contact'
import Fotter from './components/fotter'
function App() {
  let [theme, setTheme] = useState("black")
  const changeTheme = () =>{
      if (theme == "black"){
          setTheme("white")
      }
      else{
          setTheme("black")
      }
  }
  return (
        <div className=""
        style={{backgroundColor:theme}}>
          <Navbar changeTheme={changeTheme} theme={theme}/>
          <Home theme={theme} />
          <About theme={theme} />
          <Projects theme={theme}/>
          <SKills theme={theme} />
          <Contact theme={theme} />
          <Fotter theme={theme}/>
        </div>
      )
}

export default App
