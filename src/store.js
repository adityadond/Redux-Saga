import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchFetchData } from "./helloSagas";
import { rootreducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchData);

export default store;
