import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup'
import { Card } from 'react-bootstrap'
import { removeItem, addQuantity, subtractQuantity } from '../actions/Actions'
class Cart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        
                            <Card style={{ width: '15rem', height: 'auto' }} 
                            className="card" 
                            key={item.prouctId}>
                                <Card.Img className='card-image' variant="top" src={item.imageURL}/>
                                 <Card.Body>
                                    <Card.Title><h3>{item.name}</h3></Card.Title>
                                    <Card.Text>
                                        {/* <h4 className='final-price'>{finalPrice}</h4> */}
                                        <h4 className='final-price'>₹{
            (item.price - (item.price* item.discount/100))}
                </h4>
                                    </Card.Text>
                                    <div className='inc-dec'>
                                    <button onClick={() => this.handleSubtractQuantity(item.productId)}
                                   className="decrement"
                                   ><img src="https://cdn-icons-png.flaticon.com/512/565/565332.png" 
                                   width="16" height="16"/></button>
                                   <p> {item.quantity}</p>
                                    <button onClick={() => this.handleAddQuantity(item.productId)}
                                    className="increment"
                                    ><img src="https://cdn-icons-png.flaticon.com/512/32/32563.png" 
                                    width="16" height="16"/></button>
                                   
                                   
                                    </div>
                                   
                                    <button className='remove_button'
                                        onClick={() => this.handleRemove(item.productId)}>Remove From Cart</button>
                                </Card.Body>
                            </Card>
                        


                    )
                })
            ) :

            (
                <div className='empty-cart-msg'>
                    <h1>Cart is Empty</h1>
                    <Link to="/" className='link'>Return Home</Link>
                </div>
            )

        return (
            <div className="cart-container">
                <div className="cart">
                    <h1>Cart</h1>
                    <CardGroup>
                    {addedItems}
                    </CardGroup>
                        
                    <div>
                        <h2>Total : {this.props.total}</h2>
                        <Link to="/recipe" className='link-buttons'
                         
                        >Buy Now</Link>
                        </div>
                </div>
                        
                    
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total,
        finalPrice: state.discountPrice
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)