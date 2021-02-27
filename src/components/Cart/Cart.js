import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className="cart">
            <p>Country added: {cart.length}</p>
            {
                cart.map(c => <p>{c.name}</p>)
            }
            <p>
                Total population of added countries: 
                {cart.reduce((totalPopulation, country) => totalPopulation + country.population, 0)}
            </p>
            <p>
                Total area of added countries: 
                {cart.reduce((totalArea, country) => totalArea + country.area, 0)}
            </p>
        </div>
    );
};

export default Cart;