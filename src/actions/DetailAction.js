import axios from "axios";
import { gameDetailsUrl } from "../api";

export const loadDetail = (id, photo) => async (dispatch) => {
  const gameDetail = await axios.get(gameDetailsUrl(id));

  dispatch({
    type: "GAME_DETAIL",
    payload: {
      game: gameDetail.data,
      screens: photo,
    },
  });
};
