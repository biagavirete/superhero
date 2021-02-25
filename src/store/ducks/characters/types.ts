export enum CharactersTypes {
  GET_CHARACTERS_REQUEST = '@characters/GET_CHARACTERS_REQUEST',
  GET_CHARACTERS_SUCCESS = '@characters/GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_FAILURE = '@characters/GET_CHARACTERS_FAILURE',
}

export interface CharactersResponse {
  results: Characters[];
}

export interface Characters {
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  },
  biography: {
    ["full-name"]: string;
    publisher: string;
    alignment: string;
  },
  appearance: {
    gender: string;
    race: string;
  },
  image: {
    url: string;
  }
}

export interface CharactersState {
  readonly data: CharactersResponse;
  readonly loadingCharacters: boolean;
}
