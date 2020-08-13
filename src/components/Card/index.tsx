import React from "react";

import { PokemonWithData } from "../../types/Pokemon";
import {
  StyledAbilities,
  StyledAbility,
  StyledCardBody,
  StyledCardFooter,
  StyledCharacteristic,
  StyledContainer,
  StyledDescription,
  StyledFormIds,
  StyledName,
  StyledCardPhotoContainer,
  StyledValue,
} from "./styles";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  pokemon: PokemonWithData;
}

const Card: React.FC<CardProps> = ({ pokemon, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledCardPhotoContainer>
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} sprite`}
        />
      </StyledCardPhotoContainer>

      <StyledCardBody>
        <StyledFormIds>
          Forms ids: {pokemon.forms.map((form) => `#${form.id}`)}
        </StyledFormIds>
        <StyledName>{pokemon.name}</StyledName>
      </StyledCardBody>

      <StyledAbilities>
        {pokemon.abilities.map((ability, index) => (
          <StyledAbility key={index}>{ability.name}</StyledAbility>
        ))}
      </StyledAbilities>

      <StyledCardFooter>
        <StyledCharacteristic>
          <StyledValue>{pokemon.height}</StyledValue>
          <StyledDescription>Height</StyledDescription>
        </StyledCharacteristic>

        <StyledCharacteristic>
          <StyledValue>{pokemon.weight}</StyledValue>
          <StyledDescription>Weight</StyledDescription>
        </StyledCharacteristic>

        <StyledCharacteristic>
          <StyledValue>{pokemon.abilities.length}</StyledValue>
          <StyledDescription>Abilities</StyledDescription>
        </StyledCharacteristic>
      </StyledCardFooter>
    </StyledContainer>
  );
};

export default Card;
