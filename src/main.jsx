import { createRoot } from 'react-dom/client'
import './main.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Error} from "./components/Error.jsx";
import {App} from "./components/App.jsx";
import {Home} from "./Home.jsx";
import Grid from "./components/Grid.jsx";
import {CryptoPage} from "./components/CryptoPage.jsx";
import {Profile} from "./components/users/Profile.jsx";
import {UserContextProvider} from "./context/UserContext.jsx";
import {Login} from "./components/users/Login.jsx";

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route path="/cryptocoins" element={<App />}>
                    <Route index element={<Grid />} />
                    <Route path=":id" element={<CryptoPage />} />
                </Route>

                <Route path="/login" element={<Login />}>

                </Route>

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
