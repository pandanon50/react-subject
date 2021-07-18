import produce from "immer";

export const initialState = {
  beers: null,
  getBeerLoading: false,
  getBeerDone: false,
  getBeerError: false,
};

export const GET_BEER_REQUEST = "GET_BEER_REQUEST";
export const GET_BEER_SUCCESS = "GET_BEER_SUCCESS";
export const GET_BEER_FAILURE = "GET_BEER_FAILURE";

export const getRequestAction = (data) => ({
  type: GET_BEER_REQUEST,
  data,
});

export const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_BEER_REQUEST:
        draft.getBeerLoading = true;
        draft.getBeerDone = false;
        break;
      case GET_BEER_SUCCESS:
        draft.beers = action.data;
        draft.getBeerLoading = false;
        draft.getBeerDone = true;
        break;
      case GET_BEER_FAILURE:
        draft.getBeerError = true;
        break;
      default:
        return state;
    }
  });
};
