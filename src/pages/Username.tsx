import { useParams, useNavigate } from "react-router-dom";

function Username() {
    let {username} = useParams();
    const navigate = useNavigate();

    return(
        <>
            <div onClick={() => {navigate(-1)}}>⬅️</div>
            <h1>Username is : {username}</h1>
        </>
    )

}

export default Username;