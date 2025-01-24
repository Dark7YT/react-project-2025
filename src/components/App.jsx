import './App.css';
import { Menu } from "./menu/Menu.jsx";
import { Navigate, Outlet } from "react-router-dom";

export const App = () => {
    if (!localStorage.getItem("token")) {
        return <Navigate to={"/login"} />
    }

    return (
        <div className="app-container">
            <header className="app-header">CryptoTracker</header>
            <Menu />
            <div className="app-content">
                <Outlet />
            </div>
        </div>
    )
}