import React, { useState } from 'react';
import { Table, Radio } from 'antd';

const GetAttendance = ({ data }) => {
  const [attendance, setAttendance] = useState([
    { id: 1, name: 'Student 1', status: 'present' },
    { id: 2, name: 'Student 2', status: 'absent' },
    // Add more student data as needed
  ]);

  const handleAttendanceChange = (e, studentId) => {
    const updatedAttendance = attendance.map(student => {
      if (student.id === studentId) {
        return { ...student, status: e.target.value };
      }
      return student;
    });
    setAttendance(updatedAttendance);
  };

  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Attendance',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => (
        <Radio.Group value={text} onChange={(e) => handleAttendanceChange(e, record.id)}>
          <Radio.Button value="present">Present</Radio.Button>
          <Radio.Button value="absent">Absent</Radio.Button>
        </Radio.Group>
      ),
    },
  ];

  return (
    <h1>Get Attendance</h1>
  );
};

export default GetAttendance;
