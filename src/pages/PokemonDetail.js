import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/PokemonDetail.css';

function PokemonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(res.data);
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="pokemon-detail-wrapper">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
  
      {/* Name + Number */}
      <div className="pokemon-header">
        <h1>#{pokemon.id.toString().padStart(3, '0')} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      </div>

      {/* Pokemon Image + Detials */}
      <div className="pokemon-detail-container">
        <div className="left-panel">
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
        </div>
        <div className="right-panel">
          <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
          <p><strong>Height:</strong> {pokemon.height}</p>
          <p><strong>Weight:</strong> {pokemon.weight}</p>
          <h3>Stats:</h3>
          <ul>
            {pokemon.stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );  
}

export default PokemonDetail;
