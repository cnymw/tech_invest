import React from 'react';
import {Layout} from "antd";
import {AppHeader} from "./components/Header.tsx";


const App: React.FC = () => {

  return (
      <Layout>
        <AppHeader/>
      </Layout>
  );
};

export default App;
