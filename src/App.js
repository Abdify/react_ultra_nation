import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Country from "./components/Country/Country";

function App() {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);

    const [addAnimation, setAddAnimation] = useState("displayMessage");
    const [addInnerHtml, setAddInnerHtml] = useState("No country added!");

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    if(loading){
        return (
            <div className="imggg">
                <h1>Data loading...</h1>
            </div>
        );
    }

    return (
        <div className="App">
            <DisplayMessage />
            <Cart cart={cart} />

            <div className="container">
                <h1 style={{textShadow: '2px 2px 10px black'}}>Total countries found: {countries.length}</h1>

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

        const newCart = cart.includes(country)
            ? cart.filter((c) => c !== country)
            : [...cart, country];
        setCart(newCart);

        setAddAnimation("displayMessage ani");
        //optional... just to remove the ani class from the classlist 
        setTimeout(() => {
          setAddAnimation("displayMessage");
        }, 3000);

        newCart.includes(country)
            ? setAddInnerHtml(`Added ${country.name}!`)
            : setAddInnerHtml(`Removed ${country.name}!`);
    }


    function DisplayMessage() {
        return <div className={addAnimation}>{addInnerHtml}</div>;
    }
}

export default App;
