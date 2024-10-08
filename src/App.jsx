import './App.css'
import React, { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
<<<<<<< HEAD
import Projects from './components/projects'
=======
import Project from './components/project'
>>>>>>> 8df6b7f6c6683e0c924c0f3a0852ec247d647826
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
<<<<<<< HEAD
          <Projects theme={theme}/>
=======
          <Project />
>>>>>>> 8df6b7f6c6683e0c924c0f3a0852ec247d647826
        </div>
      )
}

export default App
