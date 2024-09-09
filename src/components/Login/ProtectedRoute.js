// ProtectedRoute.js
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () =>{
    const user = true;
    return user ? <Outlet/> : <Navigate to="/login"/>

}

// const ProtectedPage = () => {
//     return <h2>This is a protected page. Only visible to authenticated users.</h2>;
// };

export default ProtectedRoutes