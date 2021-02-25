import api from './api';

const CharactersService = {
  getCharacters: (inputValue: any) => api.get(`/search/${inputValue}`)
}

export default CharactersService

