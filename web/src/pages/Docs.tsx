import React from 'react';
import {BankOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'studyPolicy',
        label: '政策学习',
        icon: <BankOutlined/>,
        children: [
            {
                key: 'hqfClass',
                label: '《分析与思考：黄奇帆的复旦经济课》',
                type: 'group',
                children: [
                    {key: '1', label: '宏观调控'},
                    {key: '2', label: '基础货币'},
                    {key: '3', label: '资本市场'},
                    {key: '4', label: '房地产发展'},
                ],
            },
        ],
    }
];

export const Docs: React.FC = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Menu
            onClick={onClick}
            style={{width: 256, minHeight: '100vh'}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['studyPolicy']}
            mode="inline"
            items={items}
        />
    );
};