import {Link} from "react-router-dom";
import userData from "../assets/users.json";

type User = {
    id : number;
    firstName: string,
    image : string
}

function UserList() {

    const users: User[] = userData.users;

    return (
        <>
            {users.map(user =>
                <Link to={`/userdetails/${user.id}`}>
                    <div>
                        <p>firstName : {user.firstName}</p>
                        <img src={user.image}/>
                    </div>
                </Link>

            )}
        </>
    )
}

export default UserList;