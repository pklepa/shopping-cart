import { Link } from "react-router-dom";

import { OuterContainer, Container } from "./styles";
import { Button } from "../../components/Button/Button";

function ErrorPage() {
  return (
    <OuterContainer>
      <Container>
        <h1>
          <strong>Error 404:</strong> Woah, there's nothing in here. The page
          you are looking for is no longer{" "}
        </h1>

        <Button primary>
          <Link to="/">Go back home</Link>
        </Button>
      </Container>
    </OuterContainer>
  );
}

export default ErrorPage;
