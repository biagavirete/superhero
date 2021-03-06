import { action } from "typesafe-actions";
import { CharactersResponse, CharactersTypes } from './types';

export const loadCharactersRequest = (inputValue: any) => action(CharactersTypes.GET_CHARACTERS_REQUEST, inputValue);
export const loadCharactersSuccess = (data: CharactersResponse) => action(CharactersTypes.GET_CHARACTERS_SUCCESS, data);
export const loadCharactersFailure = () => action(CharactersTypes.GET_CHARACTERS_FAILURE);