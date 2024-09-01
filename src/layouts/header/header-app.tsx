import React from "react";
import type {MenuProps} from 'antd';
import {LabelItemsAntd} from "../../types/types";
import { Layout, Menu, theme} from 'antd';
import Logo from "../../components/logo/logo";

const {Header} = Layout;

const labelNavItems: LabelItemsAntd = ['Home', 'About', 'Projects', 'Contact'];
const items1: MenuProps['items'] = ['1', '2', '3', '4'].map((key) => ({
    key,
    label: labelNavItems[Number(key) - 1],
}));

const HeaderApp = () => {
    return (
        <>
            <Header style={{display: 'flex', alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center'}} className="demo-logo">
                    <Logo/>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items1}
                    style={{flex: 1, minWidth: 0}}
                />
            </Header>
        </>
    )
}

export default HeaderApp;
