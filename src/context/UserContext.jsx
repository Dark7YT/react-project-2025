import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get("https://reqres.in/api/users/2")
            .then(response => {
                const userData = response.data.data;
                setUser({
                    name: userData.first_name,
                    lastName: userData.last_name,
                    email: userData.email,
                    avatar: userData.avatar
                });
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };