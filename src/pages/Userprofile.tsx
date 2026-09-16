import { Navigate, useParams } from "react-router-dom";
import userData from "../assets/users.json";

type ConnectedUser = {
    id: number;
    firstName: string;
    lastName: string;
};

function Userprofile() {
    const { id } = useParams();

    const user = userData.users.find(
        (u: ConnectedUser) => u.id === Number(id)
    );

    if (!user) {
        return <Navigate to="/404" />;
    }

    return (
        <>
            <h1>Profil</h1>
            <p>Prénom : {user.firstName}</p>
            <p>Nom : {user.lastName}</p>
        </>
    );
}

export default Userprofile;