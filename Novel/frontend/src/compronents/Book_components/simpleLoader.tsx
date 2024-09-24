import React from "react";
import styled from "styled-components";

const SLoader = () => {
  return (
    <StyledWrapper>
      <div className="spinner">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height to center vertically on the page */
  width: 100vw; /* Full width to center horizontally on the page */
  position: fixed; /* Fixed position to cover the entire viewport */
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); /* Optional: semi-transparent background */
  
  .spinner {
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .spinner span {
    position: absolute;
    top: 50%;
    left: var(--left);
    width: 35px;
    height: 7px;
    background: #ffff;
    animation: dominos 1s ease infinite;
    box-shadow: 2px 2px 3px 0px black;
  }

  .spinner span:nth-child(1) {
    --left: 80px;
    animation-delay: 0.125s;
  }

  .spinner span:nth-child(2) {
    --left: 70px;
    animation-delay: 0.3s;
  }

  .spinner span:nth-child(3) {
    left: 60px;
    animation-delay: 0.425s;
  }

  .spinner span:nth-child(4) {
    animation-delay: 0.54s;
    left: 50px;
  }

  .spinner span:nth-child(5) {
    animation-delay: 0.665s;
    left: 40px;
  }

  .spinner span:nth-child(6) {
    animation-delay: 0.79s;
    left: 30px;
  }

  .spinner span:nth-child(7) {
    animation-delay: 0.915s;
    left: 20px;
  }

  .spinner span:nth-child(8) {
    left: 10px;
  }

  @keyframes dominos {
    50% {
      opacity: 0.7;
    }

    75% {
      transform: rotate(90deg);
    }

    80% {
      opacity: 1;
    }
  }
`;

export default SLoader;