import {Link} from "react-router-dom";
import userData from "../assets/users.json";
import '../UserList.css'

type User = {
    id : number;
    firstName: string,
    image : string
}

function UserList() {

    const users: User[] = userData.users;

    return (
        <div className="users-grid">
            {users.map((user) => (
                <Link
                    key={user.id}
                    className="user-link"
                    to={`/userdetails/${user.id}`}
                >
                    <div className="user-card">
                        <img src={user.image} alt={user.firstName} />
                        <p>{user.firstName}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default UserList;