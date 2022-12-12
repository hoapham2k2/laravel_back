import React from "react";
import styled from "@emotion/styled";
import sad from "../assets/img/sad.svg";
const StyledErrorPages = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 3rem;
    line-height: 1rem;
    text-transform: uppercase;
  }

  .errorPages {
    min-width: 300px;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sorryImg {
    width: 100px;
    height: 100px;
  }
`;

const ErrorPages = () => {
  return (
    <StyledErrorPages>
      <div className="errorPages">
        <img src={sad} alt="Sorry_about_that" className="sorryImg" />
        <h1>sorry</h1>
        <h1 style={{ textTransform: "uppercase" }}>We can't find that page </h1>
        <p style={{ textAlign: "justify" }}>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
      </div>
    </StyledErrorPages>
  );
};

export default ErrorPages;
