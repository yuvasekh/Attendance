import React from "react";
import student from '../../assets/student.jpg'
import { Form, Input, Button } from 'antd';
import { login } from "../Services/api";
import { useNavigate } from 'react-router-dom';
import { connect,useDispatch} from 'react-redux';
import { increment, decrement,loginuser,logoutuser,roleset } from '../ReduxStore/actions'
import jwtDecode from "jwt-decode";
const Login = ({isAuthenticated }) => {
  console.log("login")
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const onFinish = async(values) => {
    console.log('Received values:', values);
    var res=await login(values)
    console.log(res,"resapi")
    if (res.status === 200) {
      console.log("sucess")
      console.log(res.data.token)
      localStorage.setItem('token',res.data.token)
      dispatch( loginuser())
      // let info=jwtDecode(res.data.token)
      // dispatch(roleset(info.role))
     
      navigate('/', { state: { myProp:res.data} });
    }
    else
    {
      alert("Incorrect details")
    }
    // Add your login logic here
  };
  return (<div className="flex w-screen h-screen items-center bg-login bg-no-repeat bg-cover justify-center   ">


<div className=" bg-gridcolor shadow-2xl w-screen/70 h-screen/40   grid items-center opacity-90   sm:w-screen/60 sm:h-screen/40    md:w-screen/60 md:h-screen/40   lg:w-screen/35 lg:h-screen/40 ">

      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
        className="m-margin/30"
      >
        <Form.Item
          label="Id"
          name="id"
          rules={[{ required: true, message: 'Please input your Id!' }]}
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
const mapStateToProps = (state) => ({
  count: state.count,
  isAuthenticated:state.isAuthenticated
});

const mapDispatchToProps = {
  increment,
  decrement,
  loginuser,
  logoutuser,
  roleset
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
