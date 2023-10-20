import { Outlet, Navigate } from "react-router-dom";
import { getToken } from "./auth";


const ProtectedRoute = () => {

  const token = getToken();
  return (!!token ? <Outlet /> : <Navigate to={"/login"} />);
}
export default ProtectedRoute;