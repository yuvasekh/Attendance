import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getcoures } from '../Services/api';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await getcoures();
        console.log(res); // Check response from API
        setCourses(res);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourses();
  }, []); // Empty dependency array to run only once on component mount

  // Define columns for the table
  const columns = [
    
    {
      title: 'Course Name',
      dataIndex: 'courseName',
      key: 'courseName',
    },
    {
      title: 'Degree',
      dataIndex: 'degree',
      key: 'degree',
    },
  ];

  return (
    <Table
      dataSource={courses} // Use courses as dataSource
      columns={columns}
      pagination={false}
      bordered
      responsive
    />
  );
};

export default CoursesList;
