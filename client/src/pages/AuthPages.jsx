import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AuthPages = () => {
    const user = useAuth();

    return user ? <Navigate to="/" /> : <Outlet />;
};

export default AuthPages;
