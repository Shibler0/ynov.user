import '../UserList.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import type { RootState } from "../stores/store.ts";


function UserList() {

    const users = useSelector((state : RootState)=> state.user.users)
    return (
        <>
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
        </>
    );
}

export default UserList;