import api from './api';

const CharactersService = {
  getCharacters: () => api.get('/search/marvel')
}

export default CharactersService

