import React from 'react';
import {Button, Divider, Layout, Menu, Typography} from 'antd';
import {GithubOutlined, HomeOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';

const {Header} = Layout;
const {Title} = Typography;

export const AppHeader: React.FC = () => {
    const handleGithubClick = () => {
        window.open('https://github.com/cnymw/tech_invest', '_blank');
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
                    }}>Tech
                        Invest</Title>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Menu mode="horizontal" theme="light">
                        <Menu.Item key="1" icon={<HomeOutlined/>}>Home</Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined/>}>Profile</Menu.Item>
                        <Menu.Item key="3" icon={<SettingOutlined/>}>Settings</Menu.Item>
                    </Menu>
                    <Button type="text" icon={<GithubOutlined/>} onClick={handleGithubClick}
                            style={{marginLeft: '16px', color: 'black', fontSize: '16px'}}/>
                </div>
            </Header>
            <Divider style={{margin: 0}}/>
        </>

    );
};