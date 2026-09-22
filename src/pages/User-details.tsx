import {useNavigate, useParams} from "react-router-dom";
import BackButton from "../components/BackButton.tsx";
import {useEffect, useState} from "react";
import type User from "../types/user.ts";
import axios from "axios";

function UserDetails() {
    const { id } = useParams();

    const userId = Number(id);

    const url = `https://dummyjson.com/users/${userId}`;
    const navigate = useNavigate();

    const [user, setUser] = useState<User>();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get<User>(url);
                setUser(response.data);
            } catch (e) {
                console.error(e);
                navigate("/404");
            }
        })();
    }, []);

    if (!user) {
        return null;
    }

    return (
        <>
            <BackButton text="Retour" />

            <div>
                <h2>{user.username}</h2>
                <img src={user.image}/>
            </div>
        </>
    );
}

export default UserDetails;