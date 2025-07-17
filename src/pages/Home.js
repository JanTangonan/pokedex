// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      const results = await Promise.all(res.data.results.map(async (p) => {
        const details = await axios.get(p.url);
        return {
          name: details.data.name,
          image: details.data.sprites.front_default,
          id: details.data.id,
        };
      }));
      setPokemonList(results);
    };

    fetchData();
  }, []);

  return (
    <div className="pokedex">
      {pokemonList.map(pokemon => (
        <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`} className="pokemon-card">
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} alt={pokemon.name} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
