import React from "react";
//Style and Animation
import { motion } from "framer-motion";
import styled from "styled-components";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/DetailAction";

const Game = ({ name, released, image, id, photo }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id, photo));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt="" />
    </StyledGame>
  );
};
const StyledGame = styled.div`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
