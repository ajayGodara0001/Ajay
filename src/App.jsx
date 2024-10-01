import './App.css'
import React, { useState } from 'react'
import Navbar from './components/navbar'

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
        <div className=" h-3screen"
        style={{backgroundColor:theme}}>
          <Navbar changeTheme={changeTheme} theme={theme}/>
        </div>
      )
}

export default App
