import React, { useEffect } from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import { addstudent, getcoures } from '../Services/api';

const { Option } = Select;

const StudentRegistrationForm = () => {
    const [form] = Form.useForm();
    useEffect(()=>
    {
        async function fetchCourses()
        {
var courses=await getcoures()
console.log(courses,"courses")
        }
        fetchCourses()

    },[])
  const onFinish = async(values) => {
    console.log('Received values:', values);
    var res=await addstudent(values)
    console.log(res,"afterinsert")
  };

  return (
    <div className='flex justify-center items-center content-center h-screen/80'>
        {/* sm:bg-[red] md:bg-[yellow] lg:bg-[pink] */}
    <div className="bg-gridcolor shadow-2xl w-screen/85 h-screen/85     grid items-center opacity-90   sm:w-screen/60 sm:h-screen/85 mt-[90px]   md:w-screen/60 md:h-screen/85  mt-[90px] md:mr-[80px]  lg:w-screen/40 lg:h-screen/90 mt-[90px] ">
    <Form form={form} layout="vertical" onFinish={onFinish} className="m-margin/30 text-white">
  <Form.Item
    label="Full Name"
    name="fullName"
    rules={[{ required: true, message: 'Please input your full name!' }]}
  >
    <Input className="md:w-screen/12 sl:w-screen/12 lg:w-screen/12" />
  </Form.Item>
  <Form.Item
    label="Date of Birth"
    name="dateOfBirth"
    rules={[{ required: true, message: 'Please select your date of birth!' }]}
  >
    <DatePicker style={{ width: '100%' }} className="md:w-screen/12 sl:w-screen/12 lg:w-screen/22" />
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
  {/* Updated Degree Field */}
  <Form.Item
    label="Degree"
    name="degree"
    rules={[{ required: true, message: 'Please select your degree!' }]}
    className="md:w-screen/12 sl:w-screen/12 lg:w-screen/22"
  >
    <Select>
      <Option value="B.Tech">B.Tech</Option>
      <Option value="MCA">MCA</Option>
      {/* Add more options as needed */}
    </Select>
  </Form.Item>
  {/* Updated Course Field */}
  <Form.Item
    label="Course"
    name="course"
    rules={[{ required: true, message: 'Please select your course!' }]}
    className="md:w-screen/12 sl:w-screen/12 lg:w-screen/22"
  >
    <Select>
      <Option value="Computer Science">Computer Science</Option>
      <Option value="Electrical Engineering">Electrical Engineering</Option>
      {/* Add more options as needed */}
    </Select>
  </Form.Item>
  {/* New Fields */}
  <Form.Item
    label="Joining Date"
    name="joiningDate"
    rules={[{ required: true, message: 'Please select your joining date!' }]}
  >
    <DatePicker style={{ width: '100%' }} className="md:w-screen/12 sl:w-screen/12 lg:w-screen/22" />
  </Form.Item>
  {/* End of New Fields */}
  <Form.Item>
    <Button type="primary" htmlType="submit" style={{ background: 'white', color: 'black' }}>
      Add Course
    </Button>
  </Form.Item>
</Form>

    </div>
    </div>
  );
};

export default StudentRegistrationForm;
