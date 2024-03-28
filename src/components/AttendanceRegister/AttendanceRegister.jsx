import React, { useEffect, useState } from 'react';
import { Table, Radio, Select, Button, DatePicker } from 'antd';
import { addattendance, getstudentsFilter } from '../Services/api';

const { Option } = Select;
import { useParams } from 'react-router-dom';

const AttendanceTable = ({ data }) => {
  const { course, degree } = useParams();
  console.log(course,degree,"useparams")
  const [students, setStudents] = useState([]);
  const [semester, setSemester] = useState('');
  const [attendanceDate, setAttendanceDate] = useState(null); // State for attendance date

  useEffect(() => {
    fetchStudents();
  }, [semester]);

  const fetchStudents = async () => {
    try {
      let filterData = { degree: degree, course: course, semester: semester };
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

  const handleDateChange = (date) => {
    setAttendanceDate(date);
  };

  const handleSubmit = async () => {
    // Prepare attendance data to be submitted
    let attendanceData = students.map(student => ({
      ...student,
      semester: semester === "semester1" ? 1 : 2,
      attendanceDate: attendanceDate.format("YYYY-MM-DD"), // Format date as needed
    }));

    try {
      // Call API to add attendance
      var res=await addattendance(attendanceData);
      alert("Attendance submitted")
      console.log('Attendance Submitted:', attendanceData);
    } catch (error) {
      console.error('Error submitting attendance:', error);
    }
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
      <DatePicker onChange={handleDateChange} style={{ marginBottom: 16 }} placeholder="Select Attendance Date" />
      <Table
        dataSource={students}
        columns={columns}
        pagination={false}
        bordered
        responsive
      />
      <Button type="primary" onClick={handleSubmit} style={{ marginTop: 16,float:'right',marginRight:100 }} className='bg-gridcolor'>
        Submit Attendance
      </Button>
    </div>
  );
};

export default AttendanceTable;
