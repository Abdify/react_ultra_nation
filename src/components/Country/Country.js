import React, { useState } from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);
    const {name, capital, region, flag} = props.country;
    const {handleAddCountry} = props;

  const [addInnerHtml, setAddInnerHtml] = useState(false);
  let x = "Add country";
  if(addInnerHtml){
    x = 'Remove Country';
  }
    return (
        <div className="country">
            <img src={flag} alt="flag"/>
            <h3>{name}</h3> 
            <h3>{capital}</h3>
            <h3>{region}</h3>
            <button onClick={() => {
                setAddInnerHtml(!addInnerHtml);
                handleAddCountry(props.country)
                }}>{x}</button>          
        </div>
    );


};

export default Country;