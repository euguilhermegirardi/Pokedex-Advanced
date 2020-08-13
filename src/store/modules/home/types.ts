import AsyncState from "../../../types/AsyncState";
import { PokemonWithData } from "../../../types/Pokemon";

type HomeModuleState = {
  pokemons: AsyncState<{
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonWithData[];
  }>;
};

export default HomeModuleState;
