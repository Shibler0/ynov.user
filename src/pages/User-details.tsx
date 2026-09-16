import { useNavigate, useParams } from "react-router-dom";
import userData from "../assets/users.json";
import { Navigate } from "react-router-dom";

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
        return <Navigate to="/*" />;
    }

    return (
        <>
            <button className="back-button" onClick={() => navigate(-1)}>
                ⬅️
            </button>

            <div>
                <h2>{user.username}</h2>
                <img src={user.image}/>
            </div>
        </>
    );
}

export default UserDetails;