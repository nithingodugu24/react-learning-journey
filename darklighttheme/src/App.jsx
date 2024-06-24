import Card from './components/Card'
import ToggleButton from './components/ToggleButton'
import {ThemeProvider} from './contextApi/theme'
import React, {useState, useEffect} from 'react'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(theme)
  }, [theme])

  return (
    <ThemeProvider  value={{theme, setTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ToggleButton/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
      </ThemeProvider>
  )
}

export default App