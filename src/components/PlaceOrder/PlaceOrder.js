import React from 'react';
import img from '../../images/giphy.gif';

const PlaceOrder = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h1>Your Order Complite</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;