import styled from "styled-components";
import { motion } from "framer-motion";

import Img from "../../assets/images//background/night-sky.jpg";

import { ChevronsRight, ChevronsLeft } from "styled-icons/boxicons-regular";

export const Container = styled(motion.div)`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${Img});
  background-size: cover;
  background-color: var(--black);

  h1,
  h2,
  a {
    font-family: "IBM Plex Mono", monospace;
    font-size: 55px;
    font-weight: 500;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 6px;
  }

  h1 {
    font-family: "Big Shoulders Stencil Display", monospace;
    font-size: 55px;
    letter-spacing: 10px;
    background-color: var(--deep-black);
    padding: 6px 8px 6px 14px;
  }

  h2 {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3em;
    letter-spacing: 6px;
    text-align: center;

    max-width: 600px;
    margin-top: 10px;
  }

  a {
    background-color: var(--deep-black);
    padding: 6px 10px 6px 12px;
    font-size: 20px;
    font-weight: 500;
    /* margin-top: 100px; */

    transition: 0.5s;

    &:hover {
      background-color: white;
      color: var(--deep-black);
    }
  }

  & > div {
    display: flex;
    align-items: center;

    margin-top: 100px;

    & > svg {
      animation: arrowsMovement 4s ease-in-out;
      animation-iteration-count: infinite;
      margin: 0 16px;

      @keyframes arrowsMovement {
        0%,
        30%,
        50%,
        70%,
        100% {
          margin: 0 16px;
        }

        40%,
        60% {
          margin: 0 6px;
        }
      }
    }
  }
`;

export const ArrowRight = styled(ChevronsRight)`
  color: white;
  width: 32px;
`;

export const ArrowLeft = styled(ChevronsLeft)`
  color: white;
  width: 32px;
`;
