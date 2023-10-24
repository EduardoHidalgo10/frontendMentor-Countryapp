import React, { useState } from 'react'

export const NavBar = () => {


  const [isDark, setIsDark] = useState(false)

  const setDarkMode = () => {
    setIsDark(true);
    document.querySelector('body').setAttribute('data-theme','dark');
    
  }
  
  const setLightMode = () => {
    setIsDark(false);
    document.querySelector('body').setAttribute('data-theme','light');



  }

  const toggleTheme = () => {
    isDark? setLightMode():setDarkMode()

  }



  return (
    <>
     <nav className='navbar'>
        <h1 className='main_title'>Where in the world</h1>
        <div className='switch_theme'>
            {/* icono */}
            <p onClick={toggleTheme}>Dark Mode</p>
        </div>
    </nav>
    
    </>
  )
}
