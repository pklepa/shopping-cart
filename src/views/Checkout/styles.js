import styled from "styled-components";
import { motion } from "framer-motion";

import { PlusCircle, MinusCircle } from "styled-icons/boxicons-solid";
import { Cart3 } from "styled-icons/bootstrap";

export const OuterContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e3e3e3;

  background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
  padding: 20px 40px;

  @media (max-width: 500px) {
    padding: 20px 10px;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  min-height: 80vh;

  background-color: var(--white);

  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
      font-size: 18px;
      font-family: "IBM Plex mono", monospace;
      font-weight: 500;

      margin: 20px 0 12px;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin-top: 8px;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 26px;
  font-family: "IBM Plex mono", monospace;
  font-weight: 500;
  text-transform: uppercase;

  color: var(--white);
  background-color: var(--deep-black);
  padding: 4px 8px;

  margin-bottom: 10px;
`;

export const BagItem = styled.li`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #c3c3c3;

  img {
    width: 120px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 240px;

  margin-left: 20px;

  .upper-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
  }

  h1,
  p {
    font-size: 18px;
    font-weight: 500;
    font-family: "IBM Plex mono", monospace;
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

  .quantity-wrapper {
    display: flex;
    align-items: center;

    margin: 20px 0 8px;

    & > input {
      margin: 0 8px;
      padding: 4px 6px;
      border: 2px solid var(--black);
      border-radius: 3px;

      text-align: center;
    }
  }

  & > button {
    background: none;
    font-size: 11px;
    font-family: "Inconsolata", monospace;
    letter-spacing: 1px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ControlButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  & > svg {
    width: 30px;
    height: 30px;

    transition: 0.2s;

    color: ${(props) => (props.enabled ? "var(--black)" : "#c3c3c3")};

    &:active {
      color: ${(props) => (props.enabled ? "#666" : "#aaa")};
    }
  }
`;

export const PlusIcon = styled(PlusCircle)``;
export const MinusIcon = styled(MinusCircle)``;

export const CartIcon = styled(Cart3)`
  width: 60px;

  @keyframes emptyCart {
    0%,
    100% {
      transform: rotate(10deg);
      color: #333;
    }
    50% {
      transform: rotate(-10deg);
      color: red;
    }
  }

  animation: emptyCart 3s ease-in-out;
  animation-iteration-count: infinite;
`;
