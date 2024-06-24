import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='product-display'>
            <div className="product-display-left">
                <div className="product-display-img-list">
                    {[product.image, product.image, product.image, product.image].map((imgSrc, index) => (
                        <img src={imgSrc} alt={`product-thumbnail-${index}`} key={index} />
                    ))}
                </div>
                <div className="product-display-img">
                    <img className='product-display-main-img' src={product.image} alt="product-main" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-star">
                    {[...Array(4)].map((_, index) => (
                        <img src={star_icon} alt={`star-${index}`} key={index} />
                    ))}
                    <img src={star_dull_icon} alt="star-dull" />
                    <p>{122}</p>
                </div>
                <div className="product-display-prices">
                    <div className="product-display-price-old">
                        ${product.old_price}
                    </div>
                    <div className="product-display-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-display-description">
                    A lightweight, usualnjdc
                </div>
                <div className="product-display-size">
                    <h1>Select Size</h1>
                    <div className="product-display-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                            <div key={index}>{size}</div>
                        ))}
                    </div>
                </div>
                <button className='product-display-button' onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className='product-display-category'><span>Category: </span>Women, T-Shirt, Crop Top</p>
                <p className='product-display-tags'><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    );
};
