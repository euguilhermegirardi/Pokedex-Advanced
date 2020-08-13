import { applyMiddleware, compose, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import ApplicationState from "./State";

const composeEnhancers: typeof compose =
  (process.env.NODE_ENV === "development" &&
  typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== "undefined"
    ? __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: { options: true } })
    : undefined) || compose;

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
