import styled from "styled-components";

export const OuterContainer = styled.section`
  flex: 1;
  display: flex;

  background-color: #e3e3e3;

  background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
  padding: 20px 40px;

  @media (max-width: 500px) {
    padding: 20px 10px;
  }
`;

export const Container = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;

  background-color: var(--white);
`;

export const CollectionTitle = styled.h2`
  flex: 0;
  display: block;

  font-size: 20px;
  font-family: "IBM Plex Mono", monospace;
  color: var(--black);

  padding-bottom: 10px;
  border-bottom: 1px solid #c3c3c3;
  margin-bottom: 20px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-items: space-between;
  flex-wrap: wrap;
`;

export const ItemCard = styled.div`
  flex: 0 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--white);
  padding-bottom: 10px;
  margin: 10px 10px 20px;

  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 60vh;
  }

  h1,
  p {
    font-size: 18px;
    font-family: "Inconsolata", monospace;
    font-weight: bold;

    margin-top: 8px;
  }

  span {
    font-size: 11px;
    font-family: "Inconsolata", monospace;
    letter-spacing: 1px;
    background-color: #e3e3e3;
    border-radius: 2px;
    padding: 2px 4px;
    margin-top: 8px;
  }
`;
