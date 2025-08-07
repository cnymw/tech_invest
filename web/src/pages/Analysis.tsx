import React from 'react';
import {AreaChartOutlined, SearchOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'select',
        label: '大数据选股',
        icon: <SearchOutlined/>,
    },
    {
        key: 'analysis',
        label: '股票分析',
        icon: <AreaChartOutlined/>,
    }
];

export const Analysis: React.FC = () => {

    return (
        <div style={{display: 'flex'}}>
            <Menu
                style={{width: 256, minHeight: '100vh'}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['analysis']}
                mode="inline"
                items={items}
            />
        </div>
    );
};