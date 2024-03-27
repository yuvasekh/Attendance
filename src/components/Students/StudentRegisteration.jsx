import React from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';

const { Option } = Select;

const StudentRegistrationForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Form
      name="student_registration"
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
    >
      <h1>Student Registration Form</h1>
      <Form.Item
        label="Full Name"
        name="full_name"
        rules={[{ required: true, message: 'Please input your full name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date of Birth"
        name="date_of_birth"
        rules={[{ required: true, message: 'Please select your date of birth!' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: 'Please select your gender!' }]}
      >
        <Select>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      {/* Address, City, State, Zip Code, Country, Phone Number, Email Address remain unchanged */}
      <Form.Item
        label="Course"
        name="course"
        rules={[{ required: true, message: 'Please select your course!' }]}
      >
        <Select>
          <Option value="B.Tech">B.Tech</Option>
          <Option value="MCA">MCA</Option>
          {/* Add more options as needed */}
        </Select>
      </Form.Item>
      {/* Semester, Joining Year, Academic Year, Student ID remain unchanged */}
      {/* Emergency Contact Name, Relationship to Student, Emergency Contact Phone Number remain unchanged */}
      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StudentRegistrationForm;
