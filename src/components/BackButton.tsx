import { useNavigate } from "react-router-dom";

type BackButtonProps = {
    text: string;
};

function BackButton({ text }: BackButtonProps) {
    const navigate = useNavigate();

    return (
        <button
            className="back-button"
            onClick={() => navigate(-1)}
        >
            ⬅️ {text}
        </button>
    );
}

export default BackButton;