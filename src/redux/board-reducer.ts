import {PayloadAction, createSlice} from "@reduxjs/toolkit";


export type Board = {
    id: number,
    title: string,
    author: string,
    deadline: string,
    boardBg: string,
    rightsBoard: string,
}

export type Boards = Board[];

export type BoardState = {
    boards: Boards,
}

const initialState: BoardState = {
    boards: [
        {
            id: 1,
            title: 'title-1',
            author: 'author-1',
            deadline: 'завтра',
            boardBg: 'bg-1',
            rightsBoard: 'rights-board-1'
        },
        {
            id: 2,
            title: 'title-2',
            author: 'author-2',
            deadline: 'вчера',
            boardBg: 'bg-2',
            rightsBoard: 'rights-board-2'
        }
    ],
}

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        setBoard: (state, action) => {
            state.boards = state.boards.concat(action.payload);
        },
    },
});

const boardReducer = boardSlice.reducer;

const {setBoard} = boardSlice.actions;
export default boardReducer;

export {setBoard};


