import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
export const nav = styled.ul`
  width: 50vw;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  font-size: 26px;
  list-style: none;
  margin-top: 2vw;
  @media (max-width: 768px) {
    display: none;
  }

  left: 39vw;
`;

export const img2 = styled.img`
  width: 8%;
  margin-left: 5vh;
  @media (max-width: 768px) {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 13vh;
  }
`;
export const Hover = styled.li`
  text-decoration: none;
  width: 22vw;
  a:hover {
    transform: scale(1);
    transition: ease-in-out 0.5s;
    width: 27vw;
    color: green;
  }
`;

export const Legacy = styled.h1`
  display: flex;
  margin-bottom: 2vw;
  align-items: center;
  font-size: 9vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
