import styled from "styled-components";

export const OuterContainer = styled.section`
  display: flex;
  justify-content: center;

  flex-grow: 1;

  background-color: #e3e3e3;
  background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
  padding: 20px 40px;

  @media (max-width: 500px) {
    padding: 20px 10px;
  }
`;

export const Container = styled.div`
  height: 100%;
  flex-grow: 0;

  display: flex;
  justify-content: center;
  padding: 20px 40px;

  background-color: var(--white);
`;

export const MainImage = styled.img`
  flex-grow: 0;
  max-height: calc(100vh - 128px);
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 400px;
  padding: 0 20px 0 40px;

  h1,
  p,
  span {
    font-family: "Inconsolata", monospace;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  span {
    font-size: 11px;
    letter-spacing: 1px;
    background-color: #e3e3e3;
    border-radius: 2px;
    padding: 2px 4px;
    margin-top: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.3em;
    margin: 16px 0;

    strong {
      font-weight: 500;
    }
  }

  .buttons-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & > div button {
      margin-right: 10px;
    }
  }

  /* button {
    align-self: center;

    font-family: "IBM Plex Mono", monospace;
    color: var(--black);
    background-color: ${(props) =>
    props.primary ? "var(--black)" : "var(--white)"};
    border: 2px solid var(--black);
    border-radius: 3px;
    font-size: 20px;
    padding: 8px 16px;
  } */
`;
