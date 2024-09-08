import React, {useState} from 'react';
import {Card, Modal} from 'antd';
import FormNewBoard from "../form-new-board/form-new-board";

const stylesHeaderCard = {
    header: {
        background: '#07233d',
        borderRadius: '8px 8px 0 0',
        color: '#fff',
    }
}

const NoBoards = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Card
                className="hover-item"
                type="inner"
                styles={stylesHeaderCard}

                onClick={showModal}
                title="Создать доску"
                style={{width: 300, cursor: 'pointer'}}
            >
                <p>Автор:</p>
                <p>Срок:</p>
            </Card>
            <Modal
                width={330}
                footer={null}
                title="Создать доску"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <FormNewBoard closeModal={closeModal}/>
            </Modal>
        </>
    );
}

export default NoBoards;
