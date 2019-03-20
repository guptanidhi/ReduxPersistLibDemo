// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  let store = createStore(persistedReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);
  let persistor = persistStore(store);
  return { store, persistor };
}
