import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import * as CharactersActions from '../../store/ducks/characters/actions';

const SearchInput = () => {
  const dispatch = useDispatch();

  const inputValue = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    dispatch(CharactersActions.loadCharactersRequest(inputValue?.current?.value))
  }

  return (
    <>
      <div className="main-container">
        <div className="input-container">
          <div className="input-field">
            <input type="search" placeholder="Type here" ref={inputValue} />
            <div className="underline"></div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button type="button" onClick={handleSubmit}>Search</button>
      </div>
    </>
  );
}

export default SearchInput; 