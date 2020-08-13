import { Action } from "redux";

import HomeModuleState from "./types";

export const FETCH_POKEMONS = Symbol("FETCH_POKEMONS");
export const FETCH_POKEMONS_ERROR = Symbol("FETCH_POKEMONS_ERROR");
export const FETCH_POKEMONS_SUCCESS = Symbol("FETCH_POKEMONS_SUCCESS");

// Pokemons
export interface FetchPokemons extends Action<typeof FETCH_POKEMONS> {
  payload: { url: string };
}

export function fetchPokemons(
  url: FetchPokemons["payload"]["url"]
): FetchPokemons {
  return { type: FETCH_POKEMONS, payload: { url } };
}

// Error
export interface FetchPokemonsErrorAction
  extends Action<typeof FETCH_POKEMONS_ERROR> {
  payload: { error: Error };
}

export function fetchPokemonsError(
  error: FetchPokemonsErrorAction["payload"]["error"]
): FetchPokemonsErrorAction {
  return { type: FETCH_POKEMONS_ERROR, payload: { error } };
}

// Pokemons Success
export interface FetchPokemonsSuccessAction
  extends Action<typeof FETCH_POKEMONS_SUCCESS> {
  payload: { pokemons: NonNullable<HomeModuleState["pokemons"]> };
}

export function FetchPokemonsSuccess(
  pokemons: FetchPokemonsSuccessAction["payload"]["pokemons"]
): FetchPokemonsSuccessAction {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: { pokemons },
  };
}
