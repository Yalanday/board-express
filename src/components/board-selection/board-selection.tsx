import React from 'react';
import NoBoards from "../no-boards/no-boards";
import BoardsList from "../boards-list/boards-list";

type BoardSelectionProps = {
    isHaveBoards: boolean
}

const BoardSelection: React.FC<BoardSelectionProps> = ({isHaveBoards}) => {
    return (
        <div>
            {!isHaveBoards && <NoBoards/>}
            {isHaveBoards && <BoardsList/>}
        </div>
    )
};
export default BoardSelection;
