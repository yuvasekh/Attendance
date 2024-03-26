import React from "react";
import student from '../../assets/student.jpg'
import { Form, Input, Button } from 'antd';
const Login=()=>
{
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Add your login logic here
      };
    return(<div className="flex w-screen items-center ">
        <div className="w-screen/60 h-[100]">
<img src={student} className="w-screen h-screen"/>
        </div>
        <div className="w-screen/40 m-margin/30 items-center">
        <Form
      name="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input style={{width:'400px'}}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password style={{width:'400px'}}/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{background:'blue',float:'right'}}>
          Login
        </Button>
      </Form.Item>
    </Form>
        </div>
      
    </div>)
}
export default Login