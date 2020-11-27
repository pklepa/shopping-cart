import styled from "styled-components";

export const Container = styled.section`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
`;

export const ItemsContainer = styled.div`
  display: flex;
`;

export const ItemCard = styled.div`
  display: flex;

  width: 300px;
  background-color: var(--white);
  padding: 10px;

  img {
    width: 100%;
    height: auto;
  }
`;
