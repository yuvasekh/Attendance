import React, { useEffect, useState } from 'react';
import { Form, Select, Button } from 'antd';
import { getcoures } from '../Services/api';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const GetSelection = () => {
    const navigate=useNavigate()
  const [options, setOptions] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await getcoures();
        setOptions(res);
        setFilteredCourses(res); // Initially set all courses
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourses();
  }, []);

  const onFinish = (values) => {
    console.log('Received values:', values);
    console.log(options[values.course-1],"options[12]")
    navigate(`/studentsattendance/${values.degree}/${options[values.course-1].courseName}`);
  };

  const handleDegreeChange = (value) => {
    // Filter courses based on selected degree
    const filtered = options.filter((option) => option.degree === value);
    console.log(filtered)
    setFilteredCourses(filtered);
  };

  return (
    <div className='flex justify-center items-center content-center h-screen/80'>
      <div className="bg-gridcolor shadow-2xl w-screen/70 h-screen/40   grid items-center opacity-90   sm:w-screen/60 sm:h-screen/40  md:w-screen/60 md:h-screen/40   lg:w-screen/35 lg:h-screen/40 ">
        <Form
          name="course_form"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            degree: options.length > 0 ? options[0].degree : '',
            course: options.length > 0 ? options[0].id : '',
          }}
          className="m-margin/30 text-white "
        >
          <Form.Item
            name="degree"
            label="Degree"
            rules={[{ required: true, message: 'Please select a degree!' }]}
          >
            <Select onChange={handleDegreeChange}>
              {Array.from(new Set(options.map(option => option.degree))).map((degree, index) => (
                <Option key={index} value={degree}>{degree}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="course"
            label="Course"
            rules={[{ required: true, message: 'Please select a course!' }]}
          >
            <Select>
              {filteredCourses.map(option => (
                <Option key={option.id} value={option.id}>{option.courseName}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ background: 'white', color: 'black' }}>
              Get Students
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default GetSelection;
