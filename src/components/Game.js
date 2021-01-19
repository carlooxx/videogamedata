import React from "react";
//Style and Animation
import { motion } from "framer-motion";
import styled from "styled-components";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/DetailAction";
import { Link, useHistory } from "react-router-dom";

const Game = ({ name, released, image, id, photo }) => {
  const stringToId = id.toString();
  //Fix Scrolling
  const history = useHistory();
  if (history.location.pathname === "/") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id, photo));
  };
  return (
    <Link to={`/game/${id}`}>
      <StyledGame onClick={loadDetailHandler} layoutId={stringToId}>
        <h3>{name}</h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${stringToId}`} src={image} alt="" />
      </StyledGame>
    </Link>
  );
};
const StyledGame = styled(motion.div)`
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
