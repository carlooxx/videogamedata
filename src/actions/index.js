import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

//Action creator with Thunk
export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesUrl());
  const upComingGamesData = await axios.get(upcomingGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upComingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
