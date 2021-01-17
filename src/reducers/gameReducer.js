const initState = {
  popular: [],
  newGames: [],
  upcommingGame: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES": {
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        new: action.payload.newGames,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default gameReducer;
