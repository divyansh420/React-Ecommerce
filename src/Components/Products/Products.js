import React, { useEffect, useState } from 'react';
import useProduct from '../Hooks/UseProduct';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useProduct([]);
    return (
        // <div classname="product-item-container">

        //     {
        //         products.map(product => <ProductDetails
        //             key={product.id}
        //             product={product}>


        //         </ProductDetails>)
        //     }

        // </div>
        <div id="products" className='container'>
            <div className="row">
                <div id="products" className='container'>
                    <div className="row">
                        {/* <h1 className='text-primary text-center mt-5 mb-4 heading'> Our <span>Products</span></h1> */}
                        <div className="products-container ">

                            {
                                products.map(product => <ProductDetails
                                    key={product.id}
                                    product={product}>


                                </ProductDetails>)
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;