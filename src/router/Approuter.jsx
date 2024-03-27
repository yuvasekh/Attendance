import { Route, Routes, Navigate,Link } from "react-router-dom";
import Login from "../components/login/login";
import LayoutApp from "../components/layout/Layout";
import PrivateRoutes from "../components/protectedRoutes/protectedRoutes";
import AttendanceTable from "../components/AttendanceRegister/AttendanceRegister";
import GetAttendance from "../components/AttendanceRegister/GetAttendance";
import DashBoard from "../components/AttendanceRegister/DashBoard";
import AddStudentCourseForm from "../components/Students/AddCourse";
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
 </Route>
 <Route path="*" element={<Navigate replace to="/login" />} />

<Route path="/login" element={<Login />} />
 </Routes>
</div>)
}
export default AppRouter