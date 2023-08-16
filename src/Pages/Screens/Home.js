// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React from 'react';
import { Layout, Menu , Row,Col} from 'antd';
import './Home.css'; // Import the CSS file
import Images from '../../Components/Images';

import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  BarsOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const Home = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            About
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreOutlined />}>
            Services
          </Menu.Item>
          <Menu.Item key="4" icon={<BarsOutlined />}>
            Menu
          </Menu.Item>
        </Menu>
      </Header>
      <Row>
      <Col span={8}><Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">Content Here</div>
      </Content>
      </Col>
      <Col span={8}></Col>
      <Col span={8}>col-8</Col>
    </Row>

      <Footer style={{ textAlign: 'center' }}>Your Footer Text</Footer>
    </Layout>
    
  );
};

export default Home;
