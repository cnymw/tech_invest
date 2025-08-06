import React from 'react';
import {Button, Divider, Layout, Menu, type MenuProps, Typography} from 'antd';
import {GithubOutlined, ReadOutlined, SlidersOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';

const {Header} = Layout;
const {Title} = Typography;
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: '1',
        label: '量化分析',
        icon: <SlidersOutlined/>,
    },
    {
        key: '2',
        label: '文档学习',
        icon: <ReadOutlined/>,
    },
];

export const AppHeader: React.FC = () => {
    const navigate = useNavigate();

    const handleGithubClick = () => {
        window.open('https://github.com/cnymw/tech_invest', '_blank');
    };

    const handleMenuClick = (key: string) => {
        switch (key) {
            case '1':
                navigate('/analysis');
                break;
            case '2':
                navigate('/docs');
                break;
            default:
                break;
        }
    };
    return (
        <>
            <Header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                backgroundColor: 'white'
            }}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Title level={4} style={{
                        margin: 0,
                        marginLeft: '50px',
                        lineHeight: '32px',
                        fontWeight: "bold",
                        fontSize: '18px',
                        fontFamily: 'AlibabaSans'
                    }}>Tech Invest</Title>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Menu mode="horizontal" theme="light" onClick={({key}) => handleMenuClick(key)} items={items}/>
                    <Button type="text" icon={<GithubOutlined/>} onClick={handleGithubClick}
                            style={{marginLeft: '16px', color: 'black', fontSize: '16px'}}/>
                </div>
            </Header>
            <Divider style={{margin: 0}}/>
        </>

    );
};