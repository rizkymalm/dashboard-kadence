import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import reducer from "./reducers";

const persistConfig = {
  key: "key",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export { store, persistor };
