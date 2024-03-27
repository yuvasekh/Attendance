import { Route, Routes, Navigate,Link } from "react-router-dom";
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
import CourseSlection from "../components/AttendanceRegister/Selection";
function AppRouter() {
return(<div>
 <Routes>
 <Route element={<PrivateRoutes />}>
 <Route path="/attendance" element={<AttendanceTable />} />
 <Route path="/get" element={<GetAttendance />} />
 <Route path="/" element={<DashBoard />} />
 <Route path="/configuration" element={<Login />} />
 <Route path="/home" element={<LayoutApp />} />
 <Route path="/addcourse" element={<AddStudentCourseForm />} />
 <Route path="/studentsList" element={<StudentsList />} />
 <Route path="/selectcourse" element={<CourseSlection />} />
    <Route path="/coursesList" element={<CoursesList />} />
    <Route path="/students/:degree/:course" element={<AttendanceTable />} />
 <Route path="/studentregistration" element={<StudentRegistrationForm />} />
 </Route>
 <Route path="*" element={<Navigate replace to="/login" />} />

<Route path="/login" element={<Login />} />
 </Routes>
</div>)
}
export default AppRouter