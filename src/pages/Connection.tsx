import { useState } from "react";
import userData from "../assets/users.json";
import { useNavigate } from "react-router-dom";
import '../Connection.css'

function Connection() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Connexion</h1>

                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={() => {
                        const user = userData.users.find(
                            (user) =>
                                user.email === email &&
                                user.password === password
                        );

                        if (user) {
                            navigate(`/userprofile/${user.id}`);
                        } else {
                            alert("Utilisateur introuvable");
                        }
                    }}
                >
                    Se connecter
                </button>
            </div>
        </div>
    );
}

export default Connection;