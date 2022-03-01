import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart, addToFav } from '../actions/Actions'
export class Details extends Component {
    handleCartClick = (id) => {
        this.props.addToCart(id);
    }

    handleFavClick = (id) => {
        this.props.addToFav(id);
    }
    render() {

        let item = this.props.product
        
        return (

            <div className="details" key={item.productId}>
                <div className="big-img">
                    <img src={item.imageURL} alt="" />
                </div>

                <div className="box">
                <h2>{item.name}</h2>
                <p>{item.rating}
                        <img src="https://cdn-icons.flaticon.com/png/512/477/premium/477406.png?token=exp=1646085032~hmac=cd598ffd060378edea79a5e01590663e"
                            alt='' width="16" height="16" />
                    <hr></hr>
                    <p>Seller- {item.sellerName}</p>
                    <p >Category- {item.category}</p>
                    </p>
                    <p>Brand:{item.brandName}</p>
                    <p className='final-price'>₹{this.props.finalPrice}</p>
                        <p className='original-price'>₹{item.price}</p>
                        <p className='discount-percent'>{item.discount}% off</p>

                   
                    <button className="cart"
                        onClick={() => this.handleCartClick(item.productId)}>Add to cart</button>
                    <button className="cart"
                        onClick={() => this.handleFavClick(item.productId)}>Add to Favorite</button>

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isClicked: !state.isClicked,
        product: state.productDetail,
        finalPrice: state.discountPrice
        

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        addToFav: (id) => { dispatch(addToFav(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)