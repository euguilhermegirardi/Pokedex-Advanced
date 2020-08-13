import { Reducer } from "redux";

import {
  FETCH_POKEMONS,
  FETCH_POKEMONS_ERROR,
  FETCH_POKEMONS_SUCCESS,
  FetchPokemonsErrorAction,
} from "./actions";
import HomeModuleState from "./types";

const getInitialState = (): HomeModuleState => ({
  pokemons: {},
});

const homeReducer: Reducer<HomeModuleState> = (
  state = getInitialState(),
  action
) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: {
          error: undefined,
          status: "loading",
        },
      };

    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          ...action.payload.pokemons,
          error: undefined,
          status: "loaded",
        },
      };

    case FETCH_POKEMONS_ERROR:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          ...(action as FetchPokemonsErrorAction).payload,
          status: "error",
        },
      };

    default:
      return state;
  }
};

export default homeReducer;
