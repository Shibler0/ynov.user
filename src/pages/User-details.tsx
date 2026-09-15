import { useNavigate, useParams } from "react-router-dom";
import userData from "../assets/users.json";

type RestrainedUser = {
    id: number,
    username: string;
    image: string;
};

function UserDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const user = userData.users.find(
        (u: RestrainedUser) => u.id === Number(id)
    );

    if (!user) {
        return <p>Utilisateur introuvable</p>;
    }

    return (
        <>
            <button onClick={() => navigate(-1)}>
                ⬅️ Retour
            </button>

            <div>
                <h2>{user.username}</h2>
                <img src={user.image}/>
            </div>
        </>
    );
}

export default UserDetails;