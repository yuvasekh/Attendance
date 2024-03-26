import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/login/login";
function AppRouter() {
return(<div>
 <Routes>
 <Route path="/" element={<Login />} />
 </Routes>
</div>)
}
export default AppRouter