import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class OrderPlaced extends Component {
  render() {
    return (
      <div>
        <h1>SUCCESSFUL!!!</h1>
        <h2>Order has been Placed</h2>
        <Link to="/" className='link-buttons'>Return Home</Link>
      </div>
    )
  }
}

export default OrderPlaced