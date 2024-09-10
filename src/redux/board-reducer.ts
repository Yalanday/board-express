import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export type Stickers = {
    id: {
        id?: number,
        color?: any,
        status?: boolean,
        top: number;
        left: number;
        title?: string,
        description?: string,
    }
}

export type Board = {
    id: number,
    title: string,
    author: string,
    boardBg: string,
    rightsBoard: string,
    stickers?: {},
}

export type Boards = Board[];

export type BoardState = {
    boards: Boards,
}

const initialStateddd: BoardState = {
    boards: [
        {
            id: 1,
            title: 'title-1',
            author: 'author-1',
            boardBg: 'bg-1',
            rightsBoard: 'rights-board-1',
            stickers:
                {
                    1: {
                        id: 1,
                        color: 'orange',
                        status: true,
                        top: 20,
                        left: 20,
                        title: 'title-1',
                    },
                    2: {
                        id: 2,
                        color: 'red',
                        status: false,
                        top: 120,
                        left: 120,
                        title: 'title-2',
                    },
                }

        },
        {
            id: 2,
            title: 'title-2',
            author: 'author-2',
            boardBg: 'bg-2',
            rightsBoard: 'rights-board-2',
            stickers:
                {
                    1: {
                        id: 1,
                        color: 'orange',
                        status: true,
                        top: 20,
                        left: 20,
                        title: 'title-1',
                    },
                    2: {
                        id: 2,
                        color: 'red',
                        status: false,
                        top: 120,
                        left: 120,
                        title: 'title-2',
                    },
                    3: {
                        id: 3,
                        color: 'green',
                        status: true,
                        top: 20,
                        left: 20,
                        title: 'title-3',
                    }
                }
        }
    ],
}

if (!localStorage.getItem('boardsState')) {
    localStorage.setItem('boardsState', JSON.stringify(initialStateddd));
}

let newState = localStorage.getItem('boardsState');
let initialState: BoardState = newState !== null ? JSON.parse(newState) : initialStateddd;

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        setBoard: (state, action) => {
            state.boards = state.boards.concat(action.payload);
            localStorage.setItem('boardsState', JSON.stringify(state));
        },
        delBoard: (state, action) => {
            console.log(action)
            state.boards = state.boards.filter((board) => board.id !== action.payload);
            localStorage.setItem('boardsState', JSON.stringify(state));
        },
        setStickers: (state, action) => {
            state.boards.find((board) => {
                console.log(action)
                if (board.id === action.payload.currentBoard.id) {
                    board.stickers = action.payload.newBoxes;
                }
            })
            localStorage.setItem('boardsState', JSON.stringify(state));
        }
    },
});

const boardReducer = boardSlice.reducer;

const {setBoard, delBoard ,setStickers} = boardSlice.actions;
export default boardReducer;

export {setBoard, delBoard, setStickers};


