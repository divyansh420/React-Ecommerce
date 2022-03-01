import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkOut } from '../actions/Actions'
import OrderPlaced from './OrderPlaced'
export class Recipe extends Component {
  handleSubmit(event) {
    this.props.checkOut();
    event.preventDefault();
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        {
          (this.props.bought) ?
            <OrderPlaced /> :
            <div className='form-container'>
              <h4>Information</h4>
              <form onSubmit={(event) =>this.handleSubmit(event)}>
<div>

                  <input type="text" name="first_name" placeholder='First Name' />
                  <input type="text" placeholder='Last Name' />
                  <input type="email" placeholder='E-Mail' />
                  <input type="number" placeholder='Phone Number' />
                  <input type="text" placeholder='Address' />
                </div>

                <input type="submit" value="Submit" />
              </form>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bought: state.isBought,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkOut: () => dispatch(checkOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)