import { Reducer } from "redux";
import { CharactersState, CharactersTypes } from './types';

const INITIAL_STATE: CharactersState = {
  data: {
    results: []
  },
  loadingCharacters: false
}

const reducer: Reducer<CharactersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharactersTypes.GET_CHARACTERS_REQUEST:
      return { ...state, loadingQuestions: true }
    case CharactersTypes.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        loadingQuestions: false,
        data: action.payload.data
      }
    case CharactersTypes.GET_CHARACTERS_FAILURE:
      return { ...state, loadingQuestions: false }
    default:
      return state
  }
}

export default reducer
