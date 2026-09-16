import { useParams } from "react-router-dom";
import userData from "../assets/users.json";

type ConnectedUser = {
    id: number;
    firstName: string;
    lastName: string;
};

function UserProfile() {
    const { id } = useParams();

    const user = userData.users.find(
        (u: ConnectedUser) => u.id === Number(id)
    );

    if (!user) {
        return <p>Utilisateur introuvable</p>;
    }

    return (
        <>
            <h1>Profil</h1>
            <p>Prénom : {user.firstName}</p>
            <p>Nom : {user.lastName}</p>
        </>
    );
}

export default UserProfile;