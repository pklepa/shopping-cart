import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Planetarium</h1>
      <Link to="/shop">shop for a planet here</Link>
    </div>
  );
}

export default Home;
