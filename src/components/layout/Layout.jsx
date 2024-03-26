import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import {  Drawer, Radio, Space } from 'antd';
import Login from '../login/login';
const { Header, Sider, Content } = Layout;
const LayoutApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="hidden sm:hidden md:flex">
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
            <div className='flex justify-center items-center'>
           
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }} className="hidden md:flex lg:flex sm:hidden "
          />
            {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            className="flex sm:flex md:hidden lg:hidden "
            onClick={() => setCollapsed(!collapsed)}

            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}>
                Yuva

            </Button> */}
            <Button type="primary" onClick={showDrawer}       className="flex sm:flex md:hidden lg:hidden bg-miracle-blue ">
          Open
        </Button>
        

<h1>Student Attendance ManageMent System</h1>
            </div>
   
         
        </Header>
        <Content
          style={{
         
            padding: 10,
            width:'100vw',
            // minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
 <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={true}
        onClose={onClose}
        
        open={open}
        key={placement}
        width={500}
        style={{width:'70vw'}}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Drawer>
          <Login/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutApp;