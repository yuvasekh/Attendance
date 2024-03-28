import React, { useState } from 'react';
import { BookOpenText, GraduationCap, LayoutDashboard, NotebookPen, Search, User, UserCheck, UserPlus } from 'lucide-react';
import PropTypes from "prop-types";
import { Layout, Menu, Button, theme, Dropdown, Avatar } from 'antd';
import {  Drawer, Radio, Space } from 'antd';
import { Route, Routes, Navigate,Link,useNavigate } from "react-router-dom";
import { MenuIcon } from 'lucide-react';
import jwt_decode from "jwt-decode";
import { connect,useDispatch } from 'react-redux';
import { increment, decrement,loginuser,logoutuser,roleset } from '../ReduxStore/actions'
import { UserOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const LayoutApp = ({ children, isAuthenticated,role }) => {
  const navigate=useNavigate()
  let info
  console.log("called")
  console.log(localStorage.getItem('token'),"layout")
  if(!localStorage.getItem('token'))
  {
navigate('/login')
  }
  else
  {
     info = jwt_decode(localStorage.getItem('token'));
    console.log(info,"checkdata")

  }


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
  const logout=(()=>
  {
    localStorage.clear();
    // dispatch(logoutuser())
    navigate('/login')
  

  })
  const items = [
  
    {
      key: "1",
      label: (
        <div className="flex  items-center gap-2 p-1" onClick={logout}>
          <div className="text-sm font-semibold">Logout</div>
        </div>
      ),
    },
  ];
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
  theme="#213547"
  style={{color:'white',height:'100vh'}}
  mode="inline"
  defaultSelectedKeys={['1']}
 
  items={[
    {
      key: '3',
      icon:<LayoutDashboard />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: '1',
      icon: <BookOpenText />,
      label: <Link to="/get">Attendance</Link>,
    },
    {
      key: '2',
      icon: <NotebookPen />,
      label: <Link to="/attendance">Attendance Register</Link>,
    },
  
    {
      key: '4',
      icon: <NotebookPen />,
      label: <Link to="/addcourse">Add Course</Link>,
    },
    {
      key: '5',
      icon: <GraduationCap />,
      label: <Link to="/studentsList">Students List</Link>,
    },
    // {
    //   key: '6',
    //   icon: <UploadOutlined />,
    //   label: <Link to="/selectcourse">Select Course</Link>,
    // },
    {
      key: '7',
      icon: <BookOpenText />,
      label: <Link to="/coursesList">Courses List</Link>,
    },
    {
      key: '8',
      icon: <UserPlus />,
      label: <Link to="/studentregistration">Student Registration</Link>,
    },
  ]}
/>
      </Drawer>
      <Sider trigger={null} collapsible collapsed={collapsed} className={!collapsed ? " hidden sm:hidden md:flex md:bg-gridcolor md:h-screen lg:bg-gridcolor lg:h-screen"  : "hidden sm:hidden md:hidden lg:hidden"}>

        <div className="demo-logo-vertical" />
        {
       info && info.role=="admin"?     <Menu
          theme="#213547"
          style={{color:'white',height:'100vh'}}
          mode="inline"
          defaultSelectedKeys={['1']}
         
          items={[
            {
              key: '3',
              icon:<LayoutDashboard />,
              label: <Link to="/">Dashboard</Link>,
            },
            {
              key: '1',
              icon: <BookOpenText />,
              label: <Link to="/get">Attendance</Link>,
            },
            {
              key: '2',
              icon: <NotebookPen />,
              label: <Link to="/selectcourse">Attendance Register</Link>,
            },
          
            {
              key: '4',
              icon: <NotebookPen />,
              label: <Link to="/addcourse">Add Course</Link>,
            },
            {
              key: '5',
              icon: <GraduationCap />,
              label: <Link to="/studentsList">Students List</Link>,
            },
            // {
            //   key: '6',
            //   icon: <UploadOutlined />,
            //   label: <Link to="/selectcourse">Select Course</Link>,
            // },
            {
              key: '7',
              icon: <BookOpenText />,
              label: <Link to="/coursesList">Courses List</Link>,
            },
            {
              key: '8',
              icon: <UserPlus />,
              label: <Link to="/studentregistration">Student Registration</Link>,
            },
          ]}
        />:     <Menu
        theme="#213547"
        style={{color:'white',height:'100vh'}}
        mode="inline"
        defaultSelectedKeys={['1']}
       
        items={[
         
      
       
        
          
          // {
          //   key: '6',
          //   icon: <UploadOutlined />,
          //   label: <Link to="/selectcourse">Select Course</Link>,
          // },
          {
            key: '1',
            icon: <BookOpenText />,
            label: <Link to="/get">Attendance</Link>,
          },
          {
            key: '7',
            icon: <BookOpenText />,
            label: <Link to="/coursesList">Courses List</Link>,
          },
          {
            key: '8',
            icon: <User />,
            label: <Link to="/details">Details</Link>,
          },
     
        ]}
      />
        }
   

      </Sider>
      <Layout>
        <Header
          style={{
            padding: 10,
            background: '#213547',
          }}
      

        >
            <div className='flex justify-start items-center text-[white] font-medium text-lg gap-[5px] sm:gap-[450px] md:gap-[250px] lg:gap-[250px] lg:w-screen md:w-screen'>
           
          <Button
            type="text"
            icon={collapsed ? <MenuIcon /> :<MenuIcon />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 33,
              height: 33,
              alignItems:'center',
              alignContent:'center',
              float:'left',
              justifyContent:'center',
background:'white'
            }} className="hidden md:flex lg:flex sm:hidden "
          ></Button>
          
            <Button type="primary" onClick={showDrawer}    style={{
              
              alignItems:'center',
              alignContent:'center',
              float:'left',
              justifyContent:'center',
background:'white',
color:'black'
            }} icon={collapsed ? <MenuIcon /> : <MenuIcon />}     className="flex sm:flex md:hidden lg:hidden bg-miracle-blue ">
         
        </Button>
        

<span style={{textAlign:'center '}} className='text-sm md:text-lg lg:text-lg'>Student Attendance ManageMent System</span>
<Dropdown 
              menu={{ items }}
              placement="bottom"
              trigger={"click"}
              arrow={{
                pointAtCenter: true,
              }}
              className=" flex items-center justify-center cursor-pointer text-black bg-white sm:ml-[100px] md:ml-[330px] lg:ml-[350px]"
            >
             
                 <Avatar
              
              
             className='text-sm md:text-large'
                icon={<UserOutlined />}
              />
             
        </Dropdown>
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