import { configureStore } from "@reduxjs/toolkit";
import shopperReducer from "./ShopperSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PURGE,
  PAUSE,
  REGISTER,
  PERSIST,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userInfo"],
};

const persistedReducer = persistReducer(persistConfig, shopperReducer);

export const store = configureStore({
  reducer: {
    shoppers: persistedReducer
            },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            PERSIST,
            REHYDRATE,
            REGISTER,
            PAUSE,
            FLUSH,
            PURGE,
          ],
          ignoredPaths: ["register"],
      }}),
});

export const persistor = persistStore(store);
