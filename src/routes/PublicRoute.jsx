import { Navigate, Outlet } from "react-router-dom";
import { PrivateState } from "../context/PrivateContext";
// import { useAuthContext } from '@context/AuthContext'
// import { PRIVATE } from "./path";

export const PublicRoute = () => {

    // const { isAuthenticated } = useAuthContext();

    // if (isAuthenticated) {
    //     return <Navigate to={PRIVATE} />
    // }


    return (
        <PrivateState>
            <Outlet />
        </PrivateState>
    )
}  