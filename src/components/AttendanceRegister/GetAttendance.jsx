import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getAttendanceFilter } from '../Services/api';
import { useParams } from 'react-router-dom';

const GetAttendance = () => {
  const { degree, course } = useParams();
  const [attendance, setAttendance] = useState([]);
  const [studentAttendance, setStudentAttendance] = useState([]);

  useEffect(() => {
    async function fetchAttendance() {
      try {
        const res = await getAttendanceFilter({ degree: degree, course: course });
        setAttendance(res);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    }
    fetchAttendance();
  }, [degree, course]);

  useEffect(() => {
    // Calculate student attendance percentage
    const studentAttendanceMap = new Map();
    attendance.forEach(item => {
      if (!studentAttendanceMap.has(item.studentId)) {
        studentAttendanceMap.set(item.studentId, {
          id: item.studentId,
          totalClassesAttended: 0,
          totalClassesPossible: 0
        });
      }
      const student = studentAttendanceMap.get(item.studentId);
      student.totalClassesPossible++;
      student.totalClassesAttended += item.present;
    });

    const studentAttendanceArray = Array.from(studentAttendanceMap.values()).map(student => ({
      id: student.id,
      attendancePercentage: ((student.totalClassesAttended / student.totalClassesPossible) * 100).toFixed(2)
    }));
    setStudentAttendance(studentAttendanceArray);
  }, [attendance]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Attendance Percentage',
      dataIndex: 'attendancePercentage',
      key: 'attendancePercentage',
    },
  ];

  return (
    <div>
      <h1>Attendance for {degree} - {course}</h1>
      <Table dataSource={studentAttendance} columns={columns} />
    </div>
  );
};

export default GetAttendance;
