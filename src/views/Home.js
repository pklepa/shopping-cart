import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link to="/shop">go to shop</Link>
    </div>
  );
}

export default Home;
