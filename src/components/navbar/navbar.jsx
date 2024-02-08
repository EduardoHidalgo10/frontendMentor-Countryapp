import React, { useState } from 'react';

export const NavBar = () => {
  const [colorScheme, setColorScheme] = useState('light');

  const changeColorScheme = () => {
    const root = document.documentElement;
    console.log(root)
    if (colorScheme === 'light') {
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
        <div className='switch_theme'>
          <p onClick={changeColorScheme}>Dark Mode</p>
        </div>
      </nav>
    </>
  );
};

