import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 10px 20px;

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
`;

export const Title = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  font-size: 28px;
  font-weight: 400;
  color: var(--white);
  text-transform: uppercase;
  text-decoration: none;

  transition: 0.1s;

  &:hover {
    transform: scale(1.02);
  }
`;
