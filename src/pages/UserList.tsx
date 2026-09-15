import {Link} from "react-router-dom";

function UserList() {
    const users = [
        {
            "firstName": "Salvador",
            "lastName": "Gunzerker",
        },
        {
            "firstName": "Marcus",
            "lastName": "Vendor",
        },
        {
            "firstName": "Lilith",
            "lastName": "Siren",
        }
    ];

    return (
        <>
            {users.map(user =>
                <div>
                    <p><Link to={`/user/${user.firstName}`}> name : {user.firstName}</Link></p>
                    <p>last name : {user.lastName}</p>
                </div>
            )}
        </>
    )
}

export default UserList;