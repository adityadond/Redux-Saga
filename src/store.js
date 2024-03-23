import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  watchFetchData,
  watchFetchProductDetails,
  watchSagaFetchData,
} from "./helloSagas";
import { rootreducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchFetchData);
sagaMiddleware.run(watchFetchProductDetails); //
sagaMiddleware.run(watchSagaFetchData);
export default store;
