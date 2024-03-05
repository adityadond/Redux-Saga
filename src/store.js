import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchFetchData, watchFetchProductDetails } from "./helloSagas";
import { rootreducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchData);
sagaMiddleware.run(watchFetchProductDetails);
export default store;
