import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const AddStudentCourseForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <div className='flex justify-center items-center content-center h-screen/80'>
  <div className="bg-gridcolor shadow-2xl w-screen/70 h-screen/40   grid items-center opacity-90   sm:w-screen/60 sm:h-screen/40  md:w-screen/60 md:h-screen/40   lg:w-screen/35 lg:h-screen/40 ">

<Form form={form} layout="vertical" onFinish={onFinish}   className="m-margin/30 text-white ">
    
    <Form.Item
      name="degree"
      label="Degree"
      rules={[{ required: true, message: 'Please enter the degree' }]}
    >
      <Input placeholder="Enter degree name (e.g., B.Tech)"  className="md:w-screen/12 sl:w-screen/12 lg:w-screen/22 " />
    </Form.Item>
    <Form.Item
      name="course"
      label="Course"
      rules={[{ required: true, message: 'Please enter the course' }]}
    >
      <Input placeholder="Enter course name (e.g., Computer Science)" className="md:w-screen/12 sl:w-screen/12 lg:w-screen/22 "  />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" style={{background:'white',color:'black'}}>
        Add Course
      </Button>
    </Form.Item>
  </Form>
    </div>
    </div>
  
 
  );
};

export default AddStudentCourseForm;
