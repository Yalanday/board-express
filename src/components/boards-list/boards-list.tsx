import React from 'react';
import {Card, Flex} from 'antd';
import NoBoards from "../no-boards/no-boards";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks";
import {Board} from "../../redux/board-reducer";


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
    console.log(Array.isArray(boards));


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
                                    console.log('Создать доску')
                                }}
                                title={board.title}
                                style={{width: 300, cursor: 'pointer', borderColor: '#07233d'}}
                            >
                                <p>Автор: {board.author}</p>
                                <p>Срок: {board.deadline}</p>
                            </Card>
                        </Link>
                    ))}

                <NoBoards/>
            </Flex>
        </>
    )
}

export default BoardsList;
