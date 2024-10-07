import './App.css'
import React, { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'

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
          <Home theme={theme} id={1} />
          <Home theme={theme} id={2} />
        </div>
      )
}

export default App
