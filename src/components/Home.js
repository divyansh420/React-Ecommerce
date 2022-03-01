import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup'
import { Card, Button } from 'react-bootstrap'
import { showDetails } from '../actions/Actions'
import Details from './Details'


export class Home extends Component {
    handleDetails = (id, fp) => {
        this.props.showDetails(id, fp);

    }
    render() {


        let itemList = this.props.items.map(item => {
            let discountPercent = Number(item.discount)
            let finalPrice = Number(item.price)
            let discountPrice = item.price
            discountPrice = (discountPercent / 100) * discountPrice
            finalPrice = finalPrice - discountPrice
            return (
                <Card style={{ width: '18rem', height: 'auto' }}
                    className="card" key={item.prouctId} >
                    <Card.Img className='card-image' variant="top" src={item.imageURL}
                        onClick={() => this.handleDetails(item.productId, finalPrice)}
                    />
                    <Card.Body>
                        <Card.Title><h3>{item.name}</h3></Card.Title>

                        <Card.Text>
                            <ul className='prices'>
                                <li className='final-price'>₹{finalPrice}</li>
                                <li className='original-price'>₹{item.price}</li>
                                <li className='discount-percent'>{item.discount}% off</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        })
        return (
            <div className="container">
                {
                    this.props.isClicked ?
                        <Details /> :
                        <CardGroup className='card-group'>
                            {itemList}
                        </CardGroup>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        isClicked: state.isClicked,
        product: state.productDetail,
        finalPrice: state.finalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showDetails: (id) => { dispatch(showDetails(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)