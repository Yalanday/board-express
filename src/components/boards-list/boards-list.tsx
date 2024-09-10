import React from 'react';
import {Card, Flex} from 'antd';
import NoBoards from "../no-boards/no-boards";
import {Link} from "react-router-dom";
import {Board, delBoard} from "../../redux/board-reducer";
import {useAppSelector, useAppDispatch} from "../../hooks/hooks";
import {setId} from "../../redux/id-reducer";


const stylesHeaderCard = {
    header: {
        background: 'rgb(41, 135, 223)',
        borderRadius: '8px 8px 0 0',
        color: '#fff',
    }
}

const stylesHeaderCardDanger = {
    header: {
        background: 'red',
        borderRadius: '8px 8px 0 0',
        color: '#fff',
    }
}

const BoardsList = () => {

    let {boards} = useAppSelector(state => state.boards);
    const dispatch = useAppDispatch();

    const deleteBoards = () => {

    }

    return (
        <>
            <Flex gap={15} wrap={true}>

                {boards.map(
                    (board: Board) => (
                        <Link key={board.id} to={`/board/${board.id}/`}>
                            <Card
                                type="inner"
                                styles={stylesHeaderCard}

                                onClick={() => {
                                    dispatch(setId(board.id));
                                }}
                                title={board.title}
                                style={{width: 300, cursor: 'pointer', borderColor: '#07233d'}}
                            >
                                <p>Автор: {board.author}</p>
                                <button

                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(delBoard(board.id));
                                    }}

                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        fontSize: '20px',
                                        color: '#ffffff',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        outline: 'none',
                                        zIndex: '150'
                                    }}
                                >&#10006;
                                </button>

                            </Card>
                        </Link>
                    ))}

                <NoBoards/>
            </Flex>
        </>
    )
}

export default BoardsList;
