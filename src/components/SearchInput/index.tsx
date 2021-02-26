import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import * as CharactersActions from '../../store/ducks/characters/actions';

import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
        <Button
          variant="contained"
          color="primary"
          disableElevation
          endIcon={<SearchIcon />}
          onClick={handleSubmit}>
          Search
    </Button>
      </div>
    </>
  );
}

export default SearchInput; 