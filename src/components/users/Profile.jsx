import './Profile.css';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";

export const Profile = () => {
    const user = useContext(UserContext);

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <div className="profile-card">
                <img src={user.avatar} alt={`${user.name} ${user.lastName}`} />
                <h2>{user.name} {user.lastName}</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
};