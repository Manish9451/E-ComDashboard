import React from "react";
import {Navigate,Outlet} from "react-router-dom";

const PrivateComponents = () => {
    const auth = localStorage.getItem("user");
    
    return (
        auth ? <Outlet /> : <Navigate to="/signup" />
    );
    }
export default PrivateComponents;
// This component checks if the user is authenticated by checking localStorage for a "user" item.
// If the user is authenticated, it renders the child components (using <Outlet />).   

