import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);
    const {name, capital, region, flag} = props.country;
    const {handleAddCountry} = props;
    return (
        <div className="country">
            <img src={flag} alt="flag"/>
            <h3>{name}</h3> 
            <h3>{capital}</h3>
            <h3>{region}</h3>
            <button onClick={() => handleAddCountry(props.country)}>Add country</button>          
        </div>
    );


};

export default Country;