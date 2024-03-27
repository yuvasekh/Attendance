import React from "react";
import student from '../../assets/student.jpg'
import { Form, Input, Button } from 'antd';
const Login = () => {
  console.log("login")
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Add your login logic here
  };
  return (<div className="flex w-screen h-screen items-center bg-login bg-no-repeat bg-cover justify-center   ">


<div className="bg-[yellow] shadow-2xl w-screen/70 h-screen/40   grid items-center opacity-90  sm:bg-[blue] sm:w-screen/60 sm:h-screen/40   md:bg-[red] md:w-screen/60 md:h-screen/40  lg:bg-[pink] lg:w-screen/35 lg:h-screen/40 ">

      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
        className="m-margin/30"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input className="md:w-screen/12 sl:w-screen/12 lg:w-screen/22 " />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className="md:w-screen/12 sl:w-screen/12 lg:w-screen/22 " />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ background: 'blue' }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>

  </div>)
}
export default Login