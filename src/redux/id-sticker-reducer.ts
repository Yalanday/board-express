import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type StateIdSticker = {
    id: number
}

const initialStateddd: StateIdSticker = {
    id: 0,
}

if (localStorage.getItem('idSticker') === null) {
    localStorage.setItem('idSticker', JSON.stringify(initialStateddd));
}

let newState = localStorage.getItem('idSticker');
let initialState: StateIdSticker = newState !== null ? JSON.parse(newState) : initialStateddd;


const IdStickerSlice = createSlice({
    name: 'idSticker',
    initialState,
    reducers: {
        setIdSticker: (state, action: PayloadAction<number>) => {
            state.id = action.payload;
            localStorage.setItem('idSticker', JSON.stringify(state));
        },
    },
})

const IdReducer = IdStickerSlice.reducer;
export const {setIdSticker} = IdStickerSlice.actions;
export default IdReducer;
