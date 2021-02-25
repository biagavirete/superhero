import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GitHubCorner from '../../components/GithubCorner';
import ProgressBar from '../../components/ProgressBar';

import * as CharactersActions from '../../store/ducks/characters/actions';

import api from '../../services/api';
import { Characters, CharactersResponse, CharactersState } from '../../store/ducks/characters/types';
import './styles.css';


const Home = () => {
  // const [data, setData] = useState<CharactersResponse>();
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const characters = useSelector((state: CharactersState) => state.data);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    console.log(value)
  }

  // async function fetchAPI() {
  //   api.get(`/search/${value}`)
  //     .then(response => setData(response.data))
  // }

  // function handleSubmit() {
  //   try {
  //     fetchAPI()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  function handleSubmit() {
    dispatch(CharactersActions.loadCharactersRequest())
  }

  return (
    <div className="App">
      <h1>Superhero Guide</h1>
      <p>Superhero search application using the <a href="https://superheroapi.com/">SuperHero API</a>.</p>
      <div className="main-container">
        <div className="input-container">
          <div className="input-field">
            <input type="search" placeholder="Type here" value={value} onChange={handleOnChange} />
            <div className="underline"></div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button type="button" onClick={handleSubmit}>Search</button>
      </div>

      { characters !== undefined && (
        <div className="container">
          <ul className="characters-list">
            {characters?.results.map((character: Characters) => (
              <li key={character.id}>
                {console.log('nome', character.name)}
                <div className="character-card">
                  <div id="card-content">
                    <h2>{character.name}</h2>
                    <div id="img-container">
                      <img src={character.image.url} alt={character.id} />
                    </div>
                    <div id="text-container">
                      <h3>{character.biography['full-name']}</h3>
                      <p>Publisher: {character.biography.publisher}</p>
                      <p>Alignment: {character.biography.alignment}</p>
                      <br />
                      <p>Gender: {character.appearance.gender}</p>
                      <p>Race: {character.appearance.race}</p>
                    </div>
                    <div id="power-stats">
                      <p>Combat: </p> <ProgressBar value={parseInt(character.powerstats.combat)} />
                      <p>Durability: </p> <ProgressBar value={parseInt(character.powerstats.durability)} />
                      <p>Intelligence: </p> <ProgressBar value={parseInt(character.powerstats.intelligence)} />
                      <p>Power: </p> <ProgressBar value={parseInt(character.powerstats.power)} />
                      <p>Speed: </p> <ProgressBar value={parseInt(character.powerstats.speed)} />
                      <p>Strength: </p> <ProgressBar value={parseInt(character.powerstats.strength)} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <GitHubCorner />
    </div>
  );
}

export default Home;
