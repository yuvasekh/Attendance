import { Navigate, Outlet } from "react-router-dom";
import LayoutApp from "../layout/Layout";
import { useState } from "react";


const PrivateRoutes = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
console.log(isLoggedIn)
  const RedirectLogin = () => {
    return <Navigate to="/login" replace />;
  };

  return (
    <div>
      {isLoggedIn ? (
        <LayoutApp>
        
          <Outlet />
        </LayoutApp>
      ) : (
        <RedirectLogin />
      )}
    </div>
  );
};

export default PrivateRoutes;