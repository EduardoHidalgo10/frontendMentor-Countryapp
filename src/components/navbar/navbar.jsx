import React, { useState } from 'react';
import { IoMoonSharp } from "react-icons/io5";

export const NavBar = () => {
  const [colorScheme, setColorScheme] = useState('light');

  const changeColorScheme = () => {
    const root = document.documentElement;
    console.log(root)
    if (colorScheme === 'light') {
          root.style.setProperty('--color-transition', 'color 0.5s ease-in-out');

      root.setAttribute('data-color-scheme', 'dark');
      setColorScheme('dark');
    } else {
      root.setAttribute('data-color-scheme', 'light');
      setColorScheme('light');
    }
  };

  return (
    <>
      <nav className='navbar'>
        <h1 className='main_title'>Where in the world</h1>
        <div onClick={changeColorScheme} className='switch_theme'>
          <IoMoonSharp size={20}/>
          <p>Dark Mode</p>
        </div>
      </nav>
    </>
  );
};

