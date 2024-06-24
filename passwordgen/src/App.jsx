import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    genPassword();
  }, [length, numAllowed, charAllowed]);

  const genPassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllowed) {
      chars += "0123456789";
    }
    if (charAllowed) {
      chars += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    setPassword(newPassword);
  };

  const handleCopyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }).catch(error => {
        console.error('Error copying password:', error);
      });
    }
  };

  return (
    <div className="card">
      <div className="passwordData col">
        <div className="password-text">
          <label htmlFor='password'>Password: </label>
          <input 
            className='input-text password'
            id='password' 
            name='password' 
            type='text' 
            ref={inputRef}
            value={password}
            readOnly 
          />
        </div>
        {password && (
          <div className="copy-data">
            <label htmlFor='copy'>Copy Password </label>
            <button id='copy' name='copy' onClick={handleCopyPassword}>Copy</button>
          </div>
        )}
      </div>
      <div className="options col">
        <div className="length-select">
          <label htmlFor='length'>Length: {length} </label>
          <input 
            id='length' 
            name='length' 
            type='range' 
            min={8} 
            max={20} 
            value={length}
            onChange={(e) => setLength(Number(e.target.value))} 
          />
        </div>
        <div className="number-select">
          <label htmlFor='numbersAllowed'>Numbers Allowed:  </label>
          <input 
            id='numbersAllowed' 
            name='numbersAllowed' 
            type='checkbox' 
            checked={numAllowed}
            onChange={(e) => setNumAllowed(e.target.checked)} 
          />
        </div>
        <div className="spclchar-select">
          <label htmlFor='specialCharsAllowed'>Special Chars Allowed:  </label>
          <input 
            id='specialCharsAllowed' 
            name='specialCharsAllowed' 
            type='checkbox' 
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
