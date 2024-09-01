import React from "react";
import {Flex, MenuProps} from 'antd';
import {LabelItemsAntd} from "../../types/types";
import {Layout, Menu} from 'antd';
import Logo from "../../components/logo/logo";
import UserAvatar from "../../ui/user-avatar/user-avatar";
import InputSearch from "../../ui/input-search/input-search";

const {Header} = Layout;

const labelNavItems: LabelItemsAntd = ['Home', 'About', 'Projects', 'Contact'];
const items1: MenuProps['items'] = ['1', '2', '3', '4'].map((key) => ({
    key,
    label: labelNavItems[Number(key) - 1],
}));

const HeaderApp = () => {
    return (
        <>
            <Header style={{display: 'flex', alignItems: 'center', padding: '0 25px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginRight: '25px'}} className="demo-logo">
                    <Logo/>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items1}
                    style={{flex: 1, minWidth: 0}}
                />
                <Flex
                    style={{lineHeight: '100%'}}
                    align="flex-end" gap={15}>
                    <InputSearch/>
                    <UserAvatar/>
                </Flex>
            </Header>
        </>
    )
}

export default HeaderApp;

