import React, { Component } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Cart.css'

class Cart extends Component {
    render() {
      return (
      <div alt="Carrito" className="carrito"><Link to="/carrito" className="cart"><FaCartArrowDown /></Link></div>
      )
    }
}

export default Cart;