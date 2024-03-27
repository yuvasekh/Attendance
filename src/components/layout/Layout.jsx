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
import { MenuIcon } from 'lucide-react';
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
      <Sider trigger={null} collapsible collapsed={collapsed} className={!collapsed ? " hidden sm:hidden md:flex md:bg-gridcolor"  : "hidden sm:hidden md:hidden lg:hidden"}>

        <div className="demo-logo-vertical" />
        <Menu
  theme="dark"
  mode="inline"
  defaultSelectedKeys={['1']}
  items={[
    {
      key: '1',
      icon: <UserOutlined />,
      label: <Link to="/get">Attendance</Link>,
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: <Link to="/attendance">Attendance Register</Link>,
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: '4',
      icon: <UploadOutlined />,
      label: <Link to="/addcourse">Add Course</Link>,
    },
    {
      key: '5',
      icon: <UploadOutlined />,
      label: <Link to="/studentsList">Students List</Link>,
    },
    {
      key: '6',
      icon: <UploadOutlined />,
      label: <Link to="/selectcourse">Select Course</Link>,
    },
    {
      key: '7',
      icon: <UploadOutlined />,
      label: <Link to="/coursesList">Courses List</Link>,
    },
    {
      key: '8',
      icon: <UploadOutlined />,
      label: <Link to="/studentregistration">Student Registration</Link>,
    },
  ]}
/>

      </Sider>
      <Layout>
        <Header
          style={{
            padding: 10,
            background: '#213547',
          }}
      

        >
            <div className='flex justify-start items-center text-[white] font-medium text-lg gap-[20px] sm:gap-[450px] md:gap-[250px] lg:gap-[250px]'>
           
          <Button
            type="text"
            icon={collapsed ? <MenuIcon /> :<MenuIcon />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 44,
              height: 44,
              alignItems:'center',
              alignContent:'center',
              float:'left',
              justifyContent:'center',
background:'white'
            }} className="hidden md:flex lg:flex sm:hidden "
          ></Button>
          
            <Button type="primary" onClick={showDrawer}    style={{
              fontSize: '16px',
              width: 44,
              height: 44,
              alignItems:'center',
              alignContent:'center',
              float:'left',
              justifyContent:'center',
background:'white',
color:'black'
            }} icon={collapsed ? <MenuIcon /> : <MenuIcon />}     className="flex sm:flex md:hidden lg:hidden bg-miracle-blue ">
         
        </Button>
        

<h1 style={{textAlign:'center '}}>Student Attendance ManageMent System</h1>
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
                <div className="w-[90vw] h-[92vh] bg-white justify-center ">
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