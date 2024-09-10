import {configureStore} from "@reduxjs/toolkit";
import boardReducer from "./board-reducer";
import IdReducer from "./id-reducer";
import idStickerReducer from "./id-sticker-reducer";

const store = configureStore({
    reducer: {
        boards: boardReducer,
        id: IdReducer,
        idSticker: idStickerReducer,
  },
})

export default store;
