import React from 'react';
import {Card} from 'antd';

const stylesHeaderCard = {
    header: {
        background: '#07233d',
        borderRadius: '8px 8px 0 0',
        color: '#fff',
    }
}

const NoBoards = () => {
    return (
            <Card
                className="hover-item"
                type="inner"
                styles={stylesHeaderCard}

                onClick={() => {
                    console.log('Создать доску')
                }}
                title="Создать доску"
                style={{width: 300, cursor: 'pointer', borderColor: '#07233d'}}
            >
                <p>Автор:</p>
                <p>Участники: </p>
                <p>Срок:</p>
            </Card>
    );
}

export default NoBoards;
