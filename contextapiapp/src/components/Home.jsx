// components/Home.js
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#000',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div className='main' style={styles}>
      <h1>Home</h1>
      <Link to='/about'>About</Link><br />
      <a href='/about'>About via anchor tag</a><br />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch Theme</button>
    </div>
  );
}

export default Home;
