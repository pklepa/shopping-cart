import styled from "styled-components";

export const Container = styled.section`
  flex: 1;

  display: flex;
  justify-items: flex-start;
  flex-wrap: wrap;

  padding: 20px 40px;
`;

export const ItemsContainer = styled.div`
  display: flex;
`;

export const ItemCard = styled.div`
  flex: 1;
  display: flex;

  width: 300px;
  background-color: var(--white);
  padding: 10px;
  margin-bottom: 20px;
  img {
    flex: 0;

    width: 100%;
    height: auto;

    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
