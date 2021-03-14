import { usePokemon } from "../../hooks/usePokemon";

type Props = {
  pokemonName: string;
};

function Pokemon({ pokemonName }: Props) {
  const { pokemon, isLoading, error } = usePokemon(pokemonName);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Network Error</>;
  }

  return (
    <>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      <h1>{pokemon.species.name}</h1>
    </>
  );
}

export default Pokemon;
