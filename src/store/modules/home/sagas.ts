import { all, put, takeLatest } from "redux-saga/effects";

import {
  fetchData as getPokemons,
  getPokemonsData,
} from "../../../fetchers/pokemons";
import {
  FETCH_POKEMONS,
  FetchPokemons,
  fetchPokemonsError,
  fetchPokemonsSuccess,
} from "./actions";

export function* fetchPokemons({ payload }: FetchPokemons) {
  try {
    const pokemonsResponse = yield getPokemons(payload.url);
    const pokemonsWithData = yield getPokemonsData(pokemonsResponse.results);

    yield put(
      fetchPokemonsSuccess({ ...pokemonsResponse, results: pokemonsWithData })
    );
  } catch (e) {
    yield put(fetchPokemonsError(e));
  }
}

export default function* saga() {
  yield all([takeLatest(FETCH_POKEMONS, fetchPokemons)]);
}
