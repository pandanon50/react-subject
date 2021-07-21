import produce from "immer";

export const initialState = {
  beers: null,
  getBeerLoading: false,
  getBeerDone: false,
  getBeerError: false,
  filterBeerLoading: false,
  filterBeerDone: false,
  filterBeerError: false,
  filters: null,
};

export const GET_BEER_REQUEST = "GET_BEER_REQUEST";
export const GET_BEER_SUCCESS = "GET_BEER_SUCCESS";
export const GET_BEER_FAILURE = "GET_BEER_FAILURE";

export const FILTER_BEER_REQUEST = "FILTER_BEER_REQUEST";
export const FILTER_BEER_SUCCESS = "FILTER_BEER_SUCCESS";
export const FILTER_BEER_FAILURE = "FILTER_BEER_FAILURE";

export const getRequestAction = (data) => ({
  type: GET_BEER_REQUEST,
  data,
});

export const filterRequestAction = (data) => ({
  type: FILTER_BEER_REQUEST,
  data,
});

export const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_BEER_REQUEST:
        draft.filters = null;
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
      case FILTER_BEER_REQUEST:
        const from = action?.data?.from;
        const to = action?.data?.to;
        draft.filters = draft.beers.filter(
          (item) => item?.abv > from && item?.abv < to
        );
        draft.filterBeerLoading = true;
        draft.filterBeerDone = false;
        break;
      case FILTER_BEER_SUCCESS:
        draft.beers = action.data;
        draft.filterBeerLoading = false;
        draft.filterBeerDone = true;
        break;
      case FILTER_BEER_FAILURE:
        draft.filterBeerError = true;
        break;
      default:
        return state;
    }
  });
};
