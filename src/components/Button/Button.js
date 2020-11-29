import styled from "styled-components";

export const Button = styled.button`
  font-family: "IBM Plex Mono", monospace;
  color: ${(props) => (props.primary ? "var(--white)" : "var(--black)")};
  background-color: ${(props) =>
    props.primary ? "var(--black)" : "var(--white)"};
  border: 2px solid var(--black);
  border-radius: 3px;

  font-size: ${(props) => (props.small ? "13px" : "18px")};
  padding: ${(props) => (props.small ? "4px 8px" : "8px 16px")};

  transition: 0.2s;

  &:hover {
    color: ${(props) => (props.primary ? "var(--black)" : "var(--white)")};
    background-color: ${(props) =>
      props.primary ? "var(--white)" : "var(--black)"};
  }
`;
