import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  
  const generatePassword = () => {
    const length = 12;
    let charSet = '';

    const selectOption = document.getElementById("select").value;

    if (selectOption === 'Alpha') {
      charSet += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (selectOption === 'Numeric') {
      charSet += '0123456789';
    } else {
      charSet += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    }

    let newPass = '';
    for (let i = 0; i < length; i++) {
      let randomPass = Math.floor(Math.random() * charSet.length);
      newPass += charSet[randomPass];
    }

    setPassword(newPass);
    setCopied(false);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <>
      <div className='div1 flex justify-center items-center px-4 py-2'>
        <input type='text' value={password} className='rounded-lg border-2 border-black p-1' readOnly/>
        <button className='rounded-lg border-2 border-black p-1 ml-2 bg-red-300' onClick={copyPassword} disabled={!password || copied}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className='div2 flex justify-center items-center px-4 py-2'>
        <select id='select' className='rounded-lg border-2 border-black p-2'>
          <option value="Alpha">Alpha</option>
          <option value="Numeric">Numeric</option>
          <option value="Alphanumeric">Alphanumeric</option>
        </select>
        <button className='rounded-lg border-2 border-black p-1 ml-2 bg-red-300' onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
