import React from 'react';
import './ProductDetails.css';

const ProductDetails = (props) => {
    const { name, imageURL, price } = props.product;
    return (


        <div className='g-5 col-sm-12 col-md-6 col-lg-4 product'>
            <div className="card " style={{ width: "18rem" }}>
                <img src={imageURL} className="card-img-top text-center" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {/* <p className="card-text"><small>{brandName}</small></p> */}
                    <p className="card-text">Price:${price} USD</p>
                    {/* <p className="card-text">Ratings:{rating}</p> */}




                </div>
            </div>
        </div>


    );
};

export default ProductDetails;