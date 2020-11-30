import { Link } from "react-router-dom";

import { Container, ArrowRight, ArrowLeft } from "./styles";

function Home() {
  return (
    <Container
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <h1>Planetarium</h1>
      <h2>"The Earth is a very small stage in a vast cosmic arena."</h2>

      <div>
        <ArrowRight />
        <Link to="/shop">visit the shop</Link>
        <ArrowLeft />
      </div>
    </Container>
  );
}

export default Home;
