import React from 'react';
import {
    UserOutlined, DesktopOutlined,
    HeartOutlined, TeamOutlined, SettingOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';
import Logo from "../../components/logo/logo";
import {useNavigate} from "react-router-dom";

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
    getItem('Доски', '/', <DesktopOutlined/>),
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

    const navigate = useNavigate();

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <>
            <Sider width={200} style={{background: colorBgContainer, height: 'calc(100vh - 114px)'}}>
                <Menu
                    onClick={({key}) => {
                        navigate(key)
                    }}
                    style={{height: '100%'}} theme="dark" defaultSelectedKeys={['1']} mode="inline"
                    items={items}
                />
                <div style={{
                    width: '100%',
                    backgroundColor: '#001529',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Logo/>
                </div>
            </Sider>
        </>
    )
}

export default LeftMenu;

