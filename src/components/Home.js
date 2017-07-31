import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Prompt = styled.h2`
  margin-top: 3em;
  color: white;
  font-size: 160%;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5em 2em 6.5em 2em;
  font-size: 160%;
  background-image: url("https://images.unsplash.com/photo-1481833761820-0509d3217039?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=");
  background-size: cover;
`;

const Button = styled.button`
	color: #0076D1;
	font-size: 1em;
	margin: .5em;
	padding: 0.25em 1em;
	border: 2px solid #0076D1;
  border-radius: 3px;
  background-color: white;
  width: 25em;
  height: 3em;
`;

const Home = () => (
  <Container>

    <Prompt>What sounds delicious today?</Prompt>
    
    <Link to="/restaurants/wilbur">
      <Button> Wilbur Mexicana </Button>
    </Link>

    <Link to="/restaurants/AOK">
      <Button> Avenue Open Kitchen </Button>
    </Link>

    <Link to="/restaurants/CJ">
      <Button> CJ Lunch Box </Button>
    </Link>

  </Container>
);

export default Home;