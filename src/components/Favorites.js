import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Button, CardGroup } from 'react-bootstrap'
import { addToCart, removeFromFav} from '../actions/Actions'


export class Favorites extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }
    handleFavClick = (id) => {
        this.props.removeFromFav(id);
    }
    
    render() {
        
        let favItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        
                            <Card style={{ width: '18rem', height: 'auto' }} 
                            className="card" 
                            key={item.prouctId}>
                                
                                    <Card.Img className='card-image' variant="top" src={item.imageURL} />
                                    
                                
                                <Card.Body>
                                    <Card.Title><h3>{item.name}</h3></Card.Title>
                                    <Card.Text>
                                        <h4 className='final-price'>{this.props.finalPrice}</h4>
                                        <h4 className='original-price'>₹{item.price}</h4>
                                    </Card.Text>
                                        <button className='remove_button'
                                onClick={() =>this.handleFavClick(item.productId)}>Remove</button>
                                </Card.Body>
                            </Card>
                        )
                })
            ) :

            (
                <div className='empty-msg'>
                    <h1>Favorites is Empty</h1>
                    <Link to="/">Return Home</Link>
                </div>
            )
        return (
            <div className="container">
            <CardGroup className='card-group'>
                {favItems}
                </CardGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.favItems,
        isClicked: state.isClicked,
        finalPrice: state.discountPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        removeFromFav: (id) => { dispatch(removeFromFav(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)