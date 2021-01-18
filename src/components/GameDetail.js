import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { gameDetailsUrl } from "../api";

const GameDetail = () => {
  //Data
  // const { game  = useSelector((state) => state.detail);
  return (
    <div className="card-show">
      {/* <div className="details">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GameDetail;
