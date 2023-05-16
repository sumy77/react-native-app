import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
import sagaData from "./sagas";
const store = configureStore({
  reducer: reducers,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(sagaData);
export default store;
