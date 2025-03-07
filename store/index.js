import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userDataSlice';
import inventoryReducer from "./slices/inventorySlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/lib/persistStore";



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["user", "inventory"],
  };
  
const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
    reducer:{
        user: persistedReducer,
        inventory: inventoryReducer,
        // if require another reducer create file in slice folder and add here to access that reducer as like "userReducer  file"
    }
})

export const persistor = persistStore(store) 