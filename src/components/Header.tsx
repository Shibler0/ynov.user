import { Link } from "react-router-dom";
import '../Header.css'

function Header() {
    return(
        <nav className="Header">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/userList">User list</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Header;