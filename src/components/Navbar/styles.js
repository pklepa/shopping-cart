import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 10px 40px;

  background-color: var(--deep-black);

  & > ul {
    display: flex;
    align-items: center;

    & > li a {
      font-family: "IBM Plex Mono", monospace;
      font-size: 20px;
      color: var(--white);
      text-transform: uppercase;
      text-decoration: none;

      transition: 0.5s;

      &:hover {
        letter-spacing: 6px;
      }

      &:active {
        color: var(--black);
      }
    }

    & > li:not(:first-child) a {
      padding-left: 20px;
    }
  }

  @media (max-width: 630px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-family: "Big Shoulders Stencil Display", monospace;
  font-size: 28px;
  font-weight: 400;
  color: var(--white);
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;

  transition: 0.1s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 630px) {
    display: none;
  }
`;
