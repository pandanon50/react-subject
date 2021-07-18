import { all, fork, put, call, takeLatest } from "@redux-saga/core/effects";

import axios from "axios";

import { GET_BEER_FAILURE, GET_BEER_REQUEST, GET_BEER_SUCCESS } from "../beer";

function getBeerAPI(data) {
  return axios.get("https://api.punkapi.com/v2/beers");
}

function* getBeer(action) {
  try {
    const result = yield call(getBeerAPI, action.data);
    yield put({
      type: GET_BEER_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: GET_BEER_FAILURE,
      error: error.response.data,
    });
  }
}

export function* watchGetBeer() {
  yield takeLatest(GET_BEER_REQUEST, getBeer);
}
