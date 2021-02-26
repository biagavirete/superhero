import React from 'react';
import CharacterList from '../../components/CharacterList';

import GitHubCorner from '../../components/GithubCorner';

import SearchInput from '../../components/SearchInput';


import './styles.css';


const Home = () => {

  return (
    <div className="App">
      <h1>Superhero Guide</h1>
      <p>Superhero search application using the <a href="https://superheroapi.com/">SuperHero API</a>.</p>
      <SearchInput />
      <CharacterList />
      <GitHubCorner />
    </div>
  );
}

export default Home;
