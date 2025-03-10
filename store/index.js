import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./slices/userDataSlice";
import inventoryReducer from "./slices/inventorySlice";
import { combineReducers } from "redux";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "inventory"], // Persist both user & inventory
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  inventory: inventoryReducer, // Apply persist here too
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Persist both reducers
});

export const persistor = persistStore(store);
