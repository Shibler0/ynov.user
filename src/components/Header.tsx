import { Link } from "react-router-dom";

function Header() {
    return(
        <nav className="Header">
            <ul>
                <li><Link to="/recipelist">Home</Link></li>
                <li><Link to="/userList">User list</Link></li>
                <li><Link to="/user/:username">UserName</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Header;