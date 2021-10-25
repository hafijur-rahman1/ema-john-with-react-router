import React from 'react';
import useCart from '../../hookes/useCart';
import useProducts from '../../hookes/UseProducts';
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import {clearTheCart, removeFromDb} from "../../utilities/fakedb";
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [ products, setProducts] = useProducts();

    const [cart, setCart] = useCart(products)
    const history = useHistory();

    const handleRemove =key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        // removeFromeDb
        removeFromDb(key)
    }

    const handlePlaceOrder=() => {
        setCart([]);
        clearTheCart([])
        history.push('/placeOrder')

    }
    return (
        <div className= "shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.key}
                        handleRemove={handleRemove}

                         product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={()=> handlePlaceOrder()} className="btn-regular">Place Order</button>
                </Cart>
            </div>
           
        </div>
    );
};

export default OrderReview;