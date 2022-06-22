import React, { Component } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import './Cart.css'

class Cart extends Component {
    render() {
      return <div className="cart"><FaCartArrowDown /> </div>
    }
}

export default Cart;