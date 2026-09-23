import type {ReactNode} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../stores/store.ts";
import {Navigate} from "react-router-dom";

interface GuestRouteProps {
    children: ReactNode;
}

const GuestRoute = ({ children }: GuestRouteProps) => {
    const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

    return loggedUser ? <Navigate to="/" replace/> : <>{children}</>;
}

export default GuestRoute;