import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { GitApi } from "./reducers/gitApi";

export const store = configureStore({
    reducer:{
        [GitApi.reducerPath]: GitApi.reducer
    },
    middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat(GitApi.middleware)
});

setupListeners(store.dispatch);