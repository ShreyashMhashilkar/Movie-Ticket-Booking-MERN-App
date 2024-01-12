import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import bookReducer from "./bookSlice";
import orderReducer from "./orderSlice";

export const store= configureStore({
    reducer:{
        auth:authReducer,
        book:bookReducer,
        order:orderReducer
    },
});