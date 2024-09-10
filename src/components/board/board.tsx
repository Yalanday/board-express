import React, {useState} from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Example from "./example";


type BoardProps = {
    widthBoard: number,
    heightBoard: number
}
const Board: React.FC<BoardProps>= ({widthBoard, heightBoard}) => {



    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <Example widthBoard={widthBoard} heightBoard={heightBoard} />
            </DndProvider>
        </div>
    )
};

export default Board;
