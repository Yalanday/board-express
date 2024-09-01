import React from 'react';
import {Layout} from 'antd';
import HeaderApp from "../layouts/header/header-app";
import LeftMenu from "../layouts/left-menu/left-menu";
import Main from "../components/main/main";

const isHaveBoards = true;

const Home: React.FC = () => {

    return (
        <Layout>
            <HeaderApp/>
            <Layout>
                <LeftMenu />
                <Main isHaveBoards={isHaveBoards} />
            </Layout>
        </Layout>
    );
};

export default Home;
