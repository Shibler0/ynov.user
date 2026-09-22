import '../Connection.css'
import axios from "axios";
import {useState} from "react";


export interface AuthUserResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}

function Connection() {
    const [password, setPassword] = useState("");
    //const navigate = useNavigate();
    const [userName, setUsername] = useState("");

    const url = 'https://dummyjson.com/auth/login';

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Connexion</h1>

                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={() => {

                        (async () => {
                            try {
                                const response = await axios.post<AuthUserResponse>(url, {
                                    username: userName,
                                    password: password,
                                    expiresInMins: 30,
                                });
                                const authData = response.data;
                                localStorage.setItem("accessToken", authData.accessToken);
                                console.log("Token reçu :", authData.accessToken);
                                console.log("Utilisateur connecté :", authData.username);
                            } catch (e) {
                                console.error(e);
                            }
                        })();

                        /*if (userName) {
                            navigate(`/userprofile/${user.id}`);
                        } else {
                            alert("Utilisateur introuvable");
                        }*/
                    }}
                >
                    Se connecter
                </button>
            </div>
        </div>
    );
}

export default Connection;