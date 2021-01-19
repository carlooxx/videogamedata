const initState = {
  game: [],
  screens: [],
  isLoading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GAME_DETAIL": {
      return {
        ...state,
        game: action.payload.game,
        screens: action.payload.screens,
        isLoading: false,
      };
    }
    case "LOADING_GAME": {
      return {
        isLoading: true,
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
