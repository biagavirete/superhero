import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as CharactersActions from '../../store/ducks/characters/actions';

import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';


const SearchInput = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<String>();

  const dispatch = useDispatch();

  const inputValue = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!inputValue?.current?.value) {
      setError(true);
      setErrorMessage('Please type hero name');
    } else {
      dispatch(CharactersActions.loadCharactersRequest(inputValue?.current?.value))
    }
  }

  return (
    <>
      <div className="main-container">
        <TextField
          error={error}
          id="standard-error-helper-text"
          label="Hero name"
          placeholder="Type hero name"
          helperText={errorMessage}
          inputRef={inputValue}
        />
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