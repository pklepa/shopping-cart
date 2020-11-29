import styled from "styled-components";

export const OuterContainer = styled.section`
  flex: 1;
  display: flex;

  background-color: #e3e3e3;
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

export const Divider = styled.div`
  width: 80%;
  justify-self: center;
  border-bottom: 1px solid #888;
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
