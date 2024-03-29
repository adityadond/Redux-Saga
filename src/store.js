import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  watchFetchData,
  watchFetchProductDetails,
  watchSagaFetchData,
  watchSagaPostData,
} from "./helloSagas";
import { rootreducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// Middleware to save state to local storage
const saveStateMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  return result;
};

// Middleware to load state from local storage
const loadStateMiddleware = () => {
  const persistedState = localStorage.getItem("reduxState");
  return persistedState ? JSON.parse(persistedState) : undefined;
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootreducer,
  loadStateMiddleware(), // Load initial state from local storage
  composeWithDevTools(applyMiddleware(sagaMiddleware, saveStateMiddleware))
);

sagaMiddleware.run(watchFetchData);
sagaMiddleware.run(watchFetchProductDetails);
sagaMiddleware.run(watchSagaFetchData);
sagaMiddleware.run(watchSagaPostData);

export default store;
