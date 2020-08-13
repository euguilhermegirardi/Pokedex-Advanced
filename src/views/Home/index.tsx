import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ApplicationState from "../../store/State";
import { API_URL } from "../../config/env";
import { fetchPokemons } from "../../store/modules/home/actions";
import Topbar from "../../components/Topbar";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import {
  StyledCard,
  StyledCardList,
  StyledContainer,
  StyledPagination,
} from "./styles";

const INITIAL_URL = `${API_URL}/pokemon`;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const homeState = useSelector(
    (state: ApplicationState) => state.modules.home
  );

  useEffect(() => {
    dispatch(fetchPokemons(INITIAL_URL));
  }, [dispatch]);

  const retryRequestHandler = () => {
    dispatch(fetchPokemons(INITIAL_URL));
  };

  const nextPageRequestHandler = () => {
    if (homeState.pokemons.next) {
      dispatch(fetchPokemons(homeState.pokemons.next));
    }
  };

  const prevPageRequestHandler = () => {
    if (homeState.pokemons.previous) {
      dispatch(fetchPokemons(homeState.pokemons.previous));
    }
  };

  let contentRender: JSX.Element | JSX.Element[] | null = null;

  switch (homeState.pokemons.status) {
    case "error":
      contentRender = <Error retryRequest={retryRequestHandler} />;
      break;

    case "loaded":
      contentRender = homeState.pokemons.results.map((pokemon, index) => {
        return <StyledCard pokemon={pokemon} key={index} />;
      });
      break;

    case "loading":
      contentRender = <Loader />;
      break;
  }

  return (
    <>
      <Topbar />
      <StyledContainer>
        <StyledCardList>{contentRender}</StyledCardList>

        {homeState.pokemons.status === "loaded" && (
          <StyledPagination
            disableNextButton={!homeState.pokemons.next}
            disablePrevButton={!homeState.pokemons.previous}
            onNextPageRequest={nextPageRequestHandler}
            onPrevPageRequest={prevPageRequestHandler}
          />
        )}
      </StyledContainer>
    </>
  );
};

export default Home;
