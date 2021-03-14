import React from "react";

type PokemonProps = {
  sprites: {
    front_default: string;
  };
  species: {
    name: string;
  };
};

export function usePokemon(pokemonName: string) {
  const [pokemon, setPokemon] = React.useState<PokemonProps>(
    {} as PokemonProps
  );
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const json = await response.json();
        setPokemon(json);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [pokemonName]);

  return { pokemon, error, isLoading };
}
