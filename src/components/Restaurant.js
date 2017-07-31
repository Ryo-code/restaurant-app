import React, { Component } from 'react';
import data from '../data.js';
import styled from 'styled-components';
import Confirmation from './Confirmation';
import { Link } from 'react-router-dom';

export default class Restaurant extends Component {
  constructor() {
    super()
    this.showMenu = this.showMenu.bind(this);
  }

  state = {
    totalPrice: 0,
    confirmed: false,
  }

  addItem(item){
    if(this.state[item.food]){
      this.setState({
        [item.food]: {
          quantity: this.state[item.food].quantity + 1,
        },
        totalPrice: this.state.totalPrice + item.price
      })
    } else {
      this.setState({
        [item.food]: {
          quantity: 1
        },
        totalPrice: this.state.totalPrice + item.price
      })
    }
    setTimeout(()=>{
      console.log('state is:', this.state);
    }, 500)
  }

  decreaseItem(item){
    if(!this.state[item.food] || this.state[item.food].quantity === 0){
      alert("What?! Are you trying to give the shop a " + item.food + "??");
    } else {
      this.setState({
        [item.food]: {
          quantity: this.state[item.food].quantity - 1,
          cost: item.price,
        },
        totalPrice: this.state.totalPrice - item.price
      })
      setTimeout( () => {
        console.log('state is:', this.state);
      }, 500)
    }
  }

  showMenu(){
    const restaurant = this.props.match.params.id;

    const MenuItem = styled.div`
      display: flex;
      margin-top: 2em;
      justify-content: space-between;
      font-size: 120%;
    `;
    const FoodInfo = styled.div`
      padding: 0 2em 0 1em;
      justify-content: space-between;
    `;
    const Button = styled.button`
      color: #0076D1;
      font-size: 1em;
      padding: 0.25em 1em;
      border: 2px solid #0076D1;
      border-radius: 3px;
      background-color: white;
    `;
    const OrderBox = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 1em;
    `;
    const Number = styled.span`
      margin: .2em 0
    `;

    return data[restaurant].map((item) => {
      return (
        <MenuItem>
          <FoodInfo>
            <h3> {item.food} </h3>
            <p> {item.description} </p>
          </FoodInfo>

          <OrderBox>
            <Number>
              <strong> ${item.price.toFixed(2)} </strong>
            </Number>
            <Button
              onClick={ () => this.addItem(item)}
            >
              + 
            </Button>
            <Number> {this.state[item.food] ? this.state[item.food].quantity : 0} </Number>
            <Button
              onClick={ () => this.decreaseItem(item)}
            >
              -
            </Button>
          </OrderBox>

        </MenuItem>
      );
    })
  }

  submitOrder(){
    if(this.state.totalPrice === 0){
      alert("Please select an item to order");
    } else {
      this.setState({ confirmed: true }) 
    }
  }
  
  render() {
    const Banner = styled.section`
      padding: 5em;
      height: 7em;
      background-size: cover;
      background-position: center;
      background-image: url("/${this.props.match.params.id}.png");
    `;

    const Container = styled.section`
      margin: 5em auto;
      max-width: 50em;
    `;

    const Button = styled.button`
      color: #0076D1;
      font-size: 1.4em;
      padding: 0.25em 1em;
      border: 2px solid #0076D1;
      border-radius: 3px;
      background-color: white;
    `;

    const BackButton = Button.extend`
      margin-left: 1em;
    `;

    const PriceAndButton = styled.div`
      text-align: right;
      margin-top: 5em;
    `;

    const confirmed = this.state.confirmed;

    return (
      <div>
      {!confirmed ? 
        <div>
          <Banner/>

          <Container>
            <Link to="/">
              <BackButton> Pick another place </BackButton>
            </Link>

            {this.showMenu()}

            <PriceAndButton>
              <h3>
                Total Price: {this.state.totalPrice.toFixed(2)}
              </h3>
              <Button
                onClick={ () => this.submitOrder() }
              > 
                Order 
              </Button>
            </PriceAndButton>

          </Container>
        </div>
        :
        <Confirmation total={this.state.totalPrice}/>
      }
      </div>
    );
  };
};
