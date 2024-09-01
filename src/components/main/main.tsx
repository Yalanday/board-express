import React from 'react';
import {Layout, theme} from 'antd';
import BoardsList from "../boards-list/boards-list";
import NoBoards from "../no-boards/no-boards";

const {Content} = Layout;

const Main: React.FC = () => {
    const isHaveBoards = true;

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout style={{padding: '24px'}}>
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                {!isHaveBoards &&<NoBoards/>}
                {isHaveBoards && <BoardsList/>}
            </Content>
        </Layout>
    );
};

export default Main;
