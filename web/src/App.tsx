import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import { AppHeader } from './components/Header';
import { Docs } from './pages/Docs';
import {Analysis} from "./pages/Analysis.tsx";

const { Content } = Layout;

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout style={{minHeight: '100vh', margin: 0, padding: 0}}>
                <AppHeader/>
                <Content style={{margin: 0, padding: 0}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/analysis" replace/>}/>
                        <Route path="/docs" element={<Docs/>}/>
                        <Route path="/analysis" element={<Analysis/>}/>
                    </Routes>
                </Content>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
