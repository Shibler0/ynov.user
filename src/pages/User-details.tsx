import { useParams } from "react-router-dom";
import userData from "../assets/users.json";
import { Navigate } from "react-router-dom";
import BackButton from "../components/BackButton.tsx";

type RestrainedUser = {
    id: number,
    username: string;
    image: string;
};

function UserDetails() {
    const { id } = useParams();

    const userId = Number(id);

    const user = userData.users.find(
        (user: RestrainedUser) => user.id === userId
    );

    if (!user) {
        return <Navigate to="/404" />;
    }

    return (
        <>
            <BackButton text="Retour" />

            <div>
                <h2>{user.username}</h2>
                <img src={user.image}/>
            </div>
        </>
    );
}

export default UserDetails;