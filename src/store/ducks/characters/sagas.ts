import { put } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';

import { loadCharactersSuccess, loadCharactersFailure } from "./actions"

import CharactersService from "../../../services/characters-service";

export function* getCharacters(action: any) {
  try {
    const response: any = yield* call(CharactersService.getCharacters, action.payload);
    yield put(loadCharactersSuccess(response))
  } catch (err) {
    console.log(err)
    yield put(loadCharactersFailure())
  }
}
