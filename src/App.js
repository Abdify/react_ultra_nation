import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Country from './components/Country/Country';

function App() {

  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => {
      setCountries(data);
      console.log(data);
    })
    .catch(error => console.log(error))
  }, [])

  return (
      <div className="App">
          <AddAnimation />
          <Cart cart={cart} />
          
          <div className='container'>
            <h1>Total countries found: {countries.length}</h1>

            {countries.map((country) => (
              <Country
                country={country}
                key={country.alpha3Code}
                handleAddCountry={handleAddCountry}
              ></Country>
          ))}

          </div>
          

      </div>
  );


    function handleAddCountry(country) {
      console.log(country.name);

      const newCart = cart.includes(country) ? cart.filter(c => c !==country) : [...cart, country];
      setCart(newCart);
        
        
      // <AddAnimation />.classList.add('ani') ?????
      document.querySelector(".addAnimation").classList.add("ani");
      document.querySelector(".addAnimation").innerText = `Added ${country.name}`;
      console.log('what??')
      setTimeout(() => {
          document.querySelector(".addAnimation").classList.remove("ani");
        }, 2000);
      }
        


    function AddAnimation() {
      return <div className="addAnimation">No country added</div>;
    }
      
}

export default App;
