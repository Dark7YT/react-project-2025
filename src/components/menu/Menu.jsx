import './Menu.css';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import { useNavigate } from "react-router";

export const Menu = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className='main-menu'>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cryptocoins">Crypto List</NavLink></li>
                <li><NavLink to="/profile">{user.name} {user.lastName}</NavLink></li>
                <li><a className="logout" onClick={handleLogout}>Logout</a></li>
            </ul>
        </nav>
    );
};