import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

function About() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className='main' style={{backgroundColor:theme == 'light'? '#fff' : '#000'}}>
      <h1>About</h1>
    </div>
  )
}

export default About
