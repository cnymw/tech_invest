import React, {useState, useEffect} from 'react';
import {BankOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';
import './Docs.css'

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
                    {key: '黄奇帆的复旦经济课-宏观调控', label: '宏观调控'},
                    // {key: '2', label: '基础货币'},
                    // {key: '3', label: '资本市场'},
                    // {key: '4', label: '房地产发展'},
                ],
            },
        ],
    }
];

export const Docs: React.FC = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    const onClick: MenuProps['onClick'] = async (e) => {
        try {
            const response = await fetch(`/md/${e.key}.md`);
            const content = await response.text();
            setMarkdownContent(content);
        } catch (error) {
            console.error('Failed to load Markdown file:', error);
            setMarkdownContent('Failed to load content.');
        }
    };

    useEffect(() => {
        onClick({key: '黄奇帆的复旦经济课-宏观调控'} as any);
    }, []);

    return (
        <div style={{display: 'flex'}}>
            <Menu
                onClick={onClick}
                style={{width: 256, minHeight: '100vh'}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['studyPolicy']}
                mode="inline"
                items={items}
            />
            <div className="markdown-body" style={{flex: 1, padding: '20px'}}>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
        </div>
    );
};