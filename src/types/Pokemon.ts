export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonAbilityWithData {
  name: string;
}

export interface PokemonFormWithData {
  id: number;
}

export interface PokemonWithData {
  abilities: PokemonAbilityWithData[];
  forms: PokemonFormWithData[];
  height: number;
  name: string;
  sprites: {
    front_default: string;
  };
  weight: number;
}
