import React from 'react';
import {
    UserOutlined, DesktopOutlined,
HeartOutlined, TeamOutlined, SettingOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';

const {Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Доски', '1', <DesktopOutlined/>),
    getItem('Участники', '2', <UserOutlined/>),
    getItem('Настройки', 'sub1', <SettingOutlined/>, [
        getItem('Настройки темы', '3'),
        getItem('Режим отображения', '4'),
    ]),
    getItem('Мои доски', 'sub2', <TeamOutlined/>, [
        getItem('Добавить доску', '6'),
        getItem('Активные', '8')
    ]),
    getItem('Избранное', '9', <HeartOutlined/>),
];

const LeftMenu: React.FC = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <>
            <Sider width={200} style={{background: colorBgContainer, height: 'calc(100vh - 64px)'}}>
                <Menu style={{height: '100%'}} theme="dark" defaultSelectedKeys={['1']} mode="inline"
                      items={items}/>
            </Sider>
        </>
    )
}

export default LeftMenu;

