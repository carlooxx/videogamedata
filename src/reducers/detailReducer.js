const initState = {
  game: [],
  screens: [],
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GAME_DETAIL": {
      return {
        ...state,
        game: action.payload.game,
        screens: action.payload.screens,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default detailReducer;
