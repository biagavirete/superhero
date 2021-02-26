import React from 'react';
import { useSelector } from 'react-redux';
import { Characters } from '../../store/ducks/characters/types';
import GitHubCorner from '../GithubCorner';
import CustomizedProgressBars from '../ProgressBar';

const CharacterList = () => {
  const { data } = useSelector((state: any) => state.character);

  return (
    <>
      { data.results !== null && (
        <div className="container">
          <ul className="characters-list">
            {data.results.map((character: Characters) => (
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
                      <p>Combat: </p> <CustomizedProgressBars value={parseInt(character.powerstats.combat)} />
                      <p>Durability: </p> <CustomizedProgressBars value={parseInt(character.powerstats.durability)} />
                      <p>Intelligence: </p> <CustomizedProgressBars value={parseInt(character.powerstats.intelligence)} />
                      <p>Power: </p> <CustomizedProgressBars value={parseInt(character.powerstats.power)} />
                      <p>Speed: </p> <CustomizedProgressBars value={parseInt(character.powerstats.speed)} />
                      <p>Strength: </p> <CustomizedProgressBars value={parseInt(character.powerstats.strength)} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <GitHubCorner />
    </>
  );
}

export default CharacterList; 