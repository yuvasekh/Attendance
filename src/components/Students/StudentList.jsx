import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getcoures, getstudents } from '../Services/api';

const StudentList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await getstudents();
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
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Degree',
      dataIndex: 'degree',
      key: 'degree',
    },
    {
      title: 'Course',
      dataIndex: 'course',
      key: 'course',
    },
    {
      title: 'Joining Date',
      dataIndex: 'joiningDate',
      key: 'joiningDate',
      render: (date) => new Date(date).toLocaleDateString(),
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

export default StudentList;
