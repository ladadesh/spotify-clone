export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //remove after finished debugging
  //make token empty
  // token:
  //   "BQAsBqspoYpeCS3c5SGaL_msZ94kTUgNm-WbkRdLUJ1x3FbiChR2eKNmKK4Ak8okY-hWFe8iX97L_t84n96MA1Pa5Pq7TIo5nB7Au9Whbb1RYA0CYWd-iqG14xLLr9Mw4aYNgHgiKEghe0AflJ8v5wY5h7k6_bcpdN7jeX640sC-ZQJu",
};

const reducer = (state, action) => {
  console.log(action); //can be use for debugging , can save your lot of time

  //Action -> type , [payload] payload can be dynamic

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
