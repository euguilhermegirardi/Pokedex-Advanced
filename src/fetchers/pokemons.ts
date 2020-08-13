import { Pokemon, PokemonAbility, PokemonForm } from "../types/Pokemon";

export const getPokemonsData = async (pokemons: Pokemon[]) => {
  const pokemonsWithData = await Promise.all(
    pokemons.map(async (pokemon: Pokemon) => {
      const pokemonData = await fetchData(pokemon.url);
      const pokemonAbilities = await fetchUrls(
        pokemonData.abilities.map(
          (ability: PokemonAbility) => ability.ability.url
        )
      );
      const pokemonForms = await fetchUrls(
        pokemonData.forms.map((form: PokemonForm) => form.url)
      );

      return {
        ...pokemonData,
        abilities: pokemonAbilities,
        forms: pokemonForms,
      };
    })
  );

  return pokemonsWithData;
};

export const fetchUrls = (array: string[]) => {
  return Promise.all(array.map(async (url) => await fetchData(url)));
};

export const fetchData = async (url: string) => {
  const PokemonsPromise = await fetch(url);
  const PokemonsResponse = await PokemonsPromise.json();

  return PokemonsResponse;
};
