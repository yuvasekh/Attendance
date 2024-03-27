import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import PropTypes from "prop-types";
import { Layout, Menu, Button, theme } from 'antd';
import {  Drawer, Radio, Space } from 'antd';
import { Route, Routes, Navigate,Link } from "react-router-dom";
import Login from '../login/login';
const { Header, Sider, Content } = Layout;
const LayoutApp = ({ children }) => {
  console.log("called")
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
      <Sider trigger={null} collapsible collapsed={collapsed} className={!collapsed ? "hidden sm:hidden md:flex" : "hidden sm:hidden md:hidden lg:hidden"}>

        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: <Link to="/test"/>,
              icon: <UserOutlined />,
              label: <Link to="/get">Attedance</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to="/attendance">Attendance Register</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to="/">DashBoard</Link>,
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: <Link to="/addcourse">Add Course</Link>,
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
            <div className='flex justify-start items-center m-[20px] gap-[20px] sm:gap-[450px] md:gap-[250px] lg:gap-[250px]'>
           
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 44,
              height: 44,
              alignItems:'center',
              alignContent:'center',
              float:'left',
              justifyContent:'center'

            }} className="hidden md:flex lg:flex sm:hidden "
          ></Button>
          
            <Button type="primary" onClick={showDrawer}   style={{
              fontSize: '16px',
              width: 34,
              height: 34,
              alignItems:'center',
              alignContent:'center',
          justifyContent:'center'

            }}  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}     className="flex sm:flex md:hidden lg:hidden bg-miracle-blue ">
         
        </Button>
        

<h1 style={{textAlign:'center'}}>Student Attendance ManageMent System</h1>
            </div>
   
         
        </Header>
        <Content
          style={{
         
            padding: 10,
            width:'100vw',
            // minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            justifyContent:'center'
          }}
        >
                <div className="w-[90vw] h-[92vh] bg-white   ">
          {children}
        </div>

          {/* <Login/> */}
        </Content>
      </Layout>
    </Layout>
  );
};
LayoutApp.propTypes = {
  children: PropTypes.node,
};
export default LayoutApp;