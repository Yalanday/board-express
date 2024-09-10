import React, {useRef, useEffect, useState} from 'react';
import {Layout, theme} from 'antd';
import BoardsList from "../boards-list/boards-list";
import NoBoards from "../no-boards/no-boards";
import Board from "../board/board";
import BoardSelection from "../board-selection/board-selection";
import {Routes, Route} from "react-router-dom";

const {Content} = Layout;

type MainProps = {
    isHaveBoards: boolean
}

const Main: React.FC<MainProps> = ({isHaveBoards}) => {

    const boardsListRef = useRef<HTMLDivElement>(null);

    const [widthValue, setWidthValue] = useState<number>(0);
    const [heightValue, setHeightValue] = useState<number>(0);

    const setSizeValue = (width: number, height: number) => {
        setWidthValue(width);
        setHeightValue(height);
    }

    useEffect(() => {
        setSizeValue(
            Number(boardsListRef.current?.clientWidth),
            Number(boardsListRef.current?.clientHeight)
        );
    })

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <>
            <Layout style={{padding: '6px', backgroundColor: '#000000'}}>
                <Content ref={boardsListRef}
                         style={{
                             padding: 24,
                             margin: 0,
                             minHeight: 280,
                             background: '#001529',
                             borderRadius: borderRadiusLG,
                             marginBottom: '-50px'
                         }}
                >
                    <Routes>
                        <Route path="/" element={<BoardSelection isHaveBoards={isHaveBoards}/>}/>
                        <Route path="/board/:id/" element={<Board widthBoard={widthValue} heightBoard={heightValue}/>}/>
                    </Routes>

                </Content>
            </Layout>
        </>
    );
};

export default Main;
