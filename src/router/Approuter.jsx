import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/login/login";
import LayoutApp from "../components/layout/Layout";
import PrivateRoutes from "../components/protectedRoutes/protectedRoutes";
import AttendanceTable from "../components/AttendanceRegister/AttendanceRegister";
import GetAttendance from "../components/AttendanceRegister/GetAttendance";
import DashBoard from "../components/AttendanceRegister/DashBoard";
import AddStudentCourseForm from "../components/Students/AddCourse";
import StudentRegistrationForm from "../components/Students/StudentRegisteration";
import StudentsList from "../components/Students/StudentList";
import CoursesList from "../components/Students/CoursesList";
import CourseSelection from "../components/AttendanceRegister/Selection";
import GetSelection from "../components/AttendanceRegister/GetSelection";
import { connect, useDispatch } from 'react-redux';
import { increment, decrement, loginuser, logoutuser, roleset } from '../components/ReduxStore/actions'
import UserDataForm from "../components/UserForm/UserForm";
function AppRouter({ isAuthenticated,role }) {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   useEffect(() => {
//     // Add event listener to store token in localStorage when it changes
//     const handleStorageChange = () => {
//       setToken(localStorage.getItem("token"));
//     };
//     window.addEventListener("storage", handleStorageChange);

//     // Remove event listener on component unmount
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);
  console.log(isAuthenticated,"router")

  return (
    <Routes>
      {isAuthenticated ? (
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/attendance" element={<AttendanceTable />} />
          <Route path="/get" element={<GetSelection />} />
          <Route path="/configuration" element={<Login />} />
          <Route path="/home" element={<LayoutApp />} />
          <Route path="/addcourse" element={<AddStudentCourseForm />} />
          <Route path="/studentsList" element={<StudentsList />} />
          <Route path="/selectcourse" element={<CourseSelection />} />
          <Route path="/coursesList" element={<CoursesList />} />
          <Route path="/details" element={<UserDataForm />} />
          <Route
            path="/students/:degree/:course"
            element={<AttendanceTable />}
          />
          <Route
            path="/studentsattendance/:degree/:course"
            element={<GetAttendance />}
          />
          <Route
            path="/studentregistration"
            element={<StudentRegistrationForm />}
          />
        </Route>
      ) : (
        <Route path="*" element={<Navigate replace to="/login" />} />
      )}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}const mapStateToProps = (state) => ({
   count: state.count,
   isAuthenticated: state.isAuthenticated,
   role: state.role
 });
 const mapDispatchToProps = {
   increment,
   decrement,
   loginuser,
   logoutuser,
   roleset
 };
 
 export default connect(mapStateToProps)(AppRouter);


