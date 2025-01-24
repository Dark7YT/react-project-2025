import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import './Login.css';

export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const setLoadingState = (state) => {
        setLoading(state);
    };

    const setErrorState = (errorMessage) => {
        setError(errorMessage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoadingState(true);
        setErrorState(null); // Clear previous error
        axios.post("https://reqres.in/api/login", user)
            .then(response => {
                setLoadingState(false);
                localStorage.setItem("token", response.data.token);
                navigate("/");
            })
            .catch(() => {
                setLoadingState(false);
                setErrorState("Login failed. Please check your credentials and try again.");
            });
    };

    if (localStorage.getItem("token")) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <p>Please login</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="email" name="email" placeholder="Email" required />
                <input onChange={handleChange} type="password" name="password" placeholder="Password" required />
                <button type="submit" disabled={loading}>
                    {loading ? <div className="spinner"></div> : "Login"}
                </button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};