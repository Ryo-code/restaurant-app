import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Confirmation = (props) => {

  const Container = styled.section`
    max-width: 40em;
    margin: 5em auto;
    padding: 5em 2em 6.5em 2em;
    font-size: 120%;
    display: flex;
    justify-content: center;
    -webkit-box-shadow: 1px 1px 14px 0px rgba(133,133,133,1);
    -moz-box-shadow: 1px 1px 14px 0px rgba(133,133,133,1);
    box-shadow: 1px 1px 14px 0px rgba(133,133,133,1);
    text-align: center;
  `;

  const Button = styled.button`
    color: #0076D1;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #0076D1;
    border-radius: 3px;
    background-color: white;
  `;

  return (
      <Container>
        <div>
          <h1>Excellent choice!</h1>
          <p>Your total comes to <strong> ${props.total.toFixed(2)} </strong> </p>
          <p> <em> We'll get your order ready – see you soon! </em> </p>

          <Link to="/">
            <Button>Make another order</Button>
          </Link>
        </div>
      </Container>
  );
};

export default Confirmation;