import axios from "axios";
import { useEffect, useState } from "react";

function B() {
  const [gotoTop, setGotoTop] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 200) {
        setGotoTop(true);
      } else {
        setGotoTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    console.log('addEventListener');
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('removeEventListener');
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      {gotoTop && (
        <button
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20,
          }}
          onClick={scrollToTop}
        >
          Go to Top
        </button>
      )}

      <h2>
        Pokémon List{' '}
        <button onClick={toggleList}>
          {showList ? 'Hide List' : 'Show List'}
        </button>
      </h2>

      {showList && (
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>
              <strong>Name:</strong> {pokemon.name} -{' '}
              <a href={pokemon.url} target="_blank" rel="noopener noreferrer">
                {pokemon.url}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default B;
