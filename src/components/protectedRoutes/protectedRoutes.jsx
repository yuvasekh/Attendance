import { Navigate, Outlet } from "react-router-dom";

import { useState } from "react";


const PrivateRoutes = () => {
  const [isLoggedin, setlogin] = useState(false);



  const RedirectLogin = () => {
    return <Navigate to="/" replace />;
  };
  return (
    <div>
    
        {isLoggedin ? (
          <Applayout>
            <Outlet />
          </Applayout>
        ) : (
          <RedirectLogin />
        )}
   
    </div>
  );
};

export default PrivateRoutes;
