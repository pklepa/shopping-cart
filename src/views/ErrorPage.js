import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>Error 404: Oops. I couldn't find the page you are looking for.</h1>

      <Link to="/">Go back home</Link>
    </div>
  );
}

export default ErrorPage;
