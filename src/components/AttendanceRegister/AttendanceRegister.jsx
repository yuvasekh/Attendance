import React, { useEffect, useState } from 'react';
import { Table, Radio, Select, Button } from 'antd';
import { addattendance, getstudentsFilter } from '../Services/api';

const { Option } = Select;

const AttendanceTable = ({ data }) => {
  const [students, setStudents] = useState([]);
  const [semester, setSemester] = useState('');
  
  useEffect(() => {
    fetchStudents();
  }, [semester]);

  const fetchStudents = async () => {
    try {
      let filterData = { degree: "B.Tech", course: "Computer Science", semester: semester };
      const res = await getstudentsFilter(filterData);
      console.log(res, "filter"); // Check response from API
      setStudents(res);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAttendanceChange = (e, studentId) => {
    const updatedAttendance = students.map(student => {
      if (student.id === studentId) {
        return { ...student, status: e.target.value };
      }
      return student;
    });
    setStudents(updatedAttendance);
  };

  const handleSemesterChange = (value) => {
    setSemester(value);
  };

  const handleSubmit = async () => {
    // You can implement the logic for submitting attendance here
    // students["semister"]=semester
    // let data=
  
    console.log(res)
    let temp=students
    temp.forEach(student => {
        if(semester=="semester1")
        {
            student.semester = 1;
        }
        else
        {
            student.semester = 2;
        }
        
    });
    var res=await addattendance(temp[0])
    console.log('Attendance Submitted:', students);
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Student Name',
      dataIndex: 'fullName',
      key: 'fullName',
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
    <div>
      <Select style={{ width: 200, marginBottom: 16 }} onChange={handleSemesterChange} placeholder="Select Semester">
        <Option value="semester1">Semester 1</Option>
        <Option value="semester2">Semester 2</Option>
        {/* Add more options for different semesters */}
      </Select>
      <Table
        dataSource={students}
        columns={columns}
        pagination={false}
        bordered
        responsive
      />
      <Button type="primary" onClick={handleSubmit} style={{ marginTop: 16 }}>
        Submit Attendance
      </Button>
    </div>
  );
};

export default AttendanceTable;
