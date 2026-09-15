import { Link } from "react-router-dom";

function Header() {
    return(
        <nav className="Header">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/userList">User list</Link></li>
                <li><Link to="/user/:username">UserName</Link></li>
            </ul>
        </nav>
    )
}

export default Header;