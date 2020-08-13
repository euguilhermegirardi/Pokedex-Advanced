import { all } from "redux-saga/effects";

import homeSaga from "./modules/home/sagas";

export default function* rootSaga() {
  yield all([homeSaga()]);
}
