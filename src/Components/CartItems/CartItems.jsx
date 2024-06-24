import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

export const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-header">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id} className="cartitems-row">
                            <img src={product.image} alt={product.name} className='cartitems-product-image' />
                            <p>{product.name}</p>
                            <p>${product.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                            <p>${product.new_price * cartItems[product.id]}</p>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={() => removeFromCart(product.id)} alt="Remove item" />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-footer">
                <div className="cartitems-summary">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-summary-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-summary-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-summary-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='cartitems-checkout-btn'>Proceed to Checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here:</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button className='cartitems-promocode-submit'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
