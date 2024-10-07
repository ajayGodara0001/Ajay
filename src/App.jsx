import './App.css'
import React, { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Project from './components/project'
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
          <Project />
        </div>
      )
}

export default App
