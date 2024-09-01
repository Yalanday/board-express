import React from 'react';
import {Card, Flex} from 'antd';
import NoBoards from "../no-boards/no-boards";
import {Link} from "react-router-dom";


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
    return (
        <>
            <Flex gap={15} wrap={true}>
                <Link to="/board/:id/">
                    <Card
                        type="inner"
                        styles={stylesHeaderCard}

                        onClick={() => {
                            console.log('Создать доску')
                        }}
                        title="Доска желаний"
                        style={{width: 300, cursor: 'pointer', borderColor: '#07233d'}}
                    >
                        <p>Автор: Петрушка</p>
                        <p>Участники: 3</p>
                        <p>Срок: Завтра</p>
                    </Card>
                </Link>
                <Link to="/board/:id/">
                    <Card
                        type="inner"
                        styles={stylesHeaderCardDanger}

                        onClick={() => {
                            console.log('Создать доску')
                        }}
                        title="Доска наказаний"
                        style={{width: 300, cursor: 'pointer', borderColor: '#07233d'}}
                    >
                        <p>Автор: Алёнушка</p>
                        <p>Участники: 5</p>
                        <p>Срок: вчера</p>
                    </Card>
                </Link>
                <NoBoards/>
            </Flex>
        </>
    )
}

export default BoardsList;
