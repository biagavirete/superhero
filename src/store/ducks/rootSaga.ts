import { takeLatest } from 'redux-saga/effects';
import { all } from 'typed-redux-saga';

import { CharactersTypes } from './characters/types';
import { getCharacters } from './characters/sagas';

export default function* rootSaga(): any {
  return yield* all([
    takeLatest(CharactersTypes.GET_CHARACTERS_REQUEST, getCharacters),
  ])
}
