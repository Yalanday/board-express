import {configureStore} from "@reduxjs/toolkit";
import boardReducer from "./board-reducer";

const store = configureStore({
    reducer: {
        boards: boardReducer,
  },
})

export default store;
