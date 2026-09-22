import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">

      <div className="not-found-box">

        <div className="not-found-number">
          404
        </div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <button
          onClick={() => navigate("/")}
        >
          Go to Home →
        </button>

      </div>

    </div>
  );
}

export default NotFound;