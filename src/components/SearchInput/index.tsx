import React, { useState } from 'react';
import './style.css'

const SearchInput = () => {
  const [value, setValue] = useState('');

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  return (
    <div className="main-container">
      <div className="input-container">
        <div className="input-field">
          <input type="search" placeholder="Type here" onChange={handleChange} />
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput; 