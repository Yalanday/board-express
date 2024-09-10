import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type StateId = {
    id: number
}

const initialStateddd: StateId = {
    id: 0,
}

if (localStorage.getItem('idBoard') === null) {
    localStorage.setItem('idBoard', JSON.stringify(initialStateddd));
}

let newState = localStorage.getItem('idBoard');
let initialState: StateId = newState !== null ? JSON.parse(newState) : initialStateddd;


const IdSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<number>) => {
            state.id = action.payload;
            localStorage.setItem('idBoard', JSON.stringify(state));
        },
    },
})

const IdReducer = IdSlice.reducer;
export const {setId} = IdSlice.actions;
export default IdReducer;
