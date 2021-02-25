import api from './api';

const CharactersService = {
  getCharacters: (value: string) => api.get('/search', { params: value })
}

export default CharactersService;

