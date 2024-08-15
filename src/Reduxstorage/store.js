import { configureStore } from "@reduxjs/toolkit";
import  historyReducer  from "./historySlice";

export const store = configureStore({
    reducer: historyReducer

})