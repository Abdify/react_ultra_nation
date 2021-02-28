import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className="cart">
            <small>Hover me</small>
            <p>Countries added: {cart.length}</p>
            <br />
            <h5>Countries</h5>
            {cart.map((c) => (
                <p>{c.name}</p>
            ))}
            <p>
                <h5>Total population of added countries: </h5>
                {cart.reduce((totalPopulation, country) => totalPopulation + country.population, 0)}
            </p>
            <p>
                <h5>Total area of added countries: </h5>
                {cart.reduce((totalArea, country) => totalArea + country.area, 0)}
            </p>
        </div>
    );
};

export default Cart;