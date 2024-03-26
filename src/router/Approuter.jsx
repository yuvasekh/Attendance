import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/login/login";
import LayoutApp from "../components/layout/Layout";
function AppRouter() {
return(<div>
 <Routes>
 <Route path="/" element={<Login />} />
 <Route path="/home" element={<LayoutApp />} />
 </Routes>
</div>)
}
export default AppRouter