import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space,  } from 'antd';

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
    console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const items: MenuProps['items'] = [
    {
        label: 'Движения',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: 'Ещё движения',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: 'Много движений',
        key: '3',
        icon: <UserOutlined />,
        danger: true,
    },
];

const menuProps = {
    items,
    onClick: handleMenuClick,
};

const UserAvatar = () => {

    return (
        <>
            <Space wrap>
                <Dropdown menu={menuProps}>
                <Button
                    type="primary"
                    icon={<UserOutlined />}
                ></Button>
                    </Dropdown>
            </Space>
        </>
    )
}

export default UserAvatar;
