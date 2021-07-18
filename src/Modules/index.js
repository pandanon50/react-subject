import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { reducer as beer } from "./beer";
import { watchGetBeer } from "./sagas/beer";
//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();

const rootReducer = combineReducers({
  beer,
});

// export default rootReducer;
export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([fork(watchGetBeer)]);
}
