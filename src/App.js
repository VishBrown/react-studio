import "./App.css";
import {useState,useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from './components/BakeryItem';
import './App.css';


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



export default function App() {
  const [cart, setCart] = useState([]);
  //Calculating total amount of the carrt
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += Number(cart[i].price);
  }
  

  const addtoCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <h1>My Bakery</h1>
      
      <div className="bakery-items">
        {bakeryData.map((item) => (
          <BakeryItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            addToCart={() => addtoCart(item)}
          />
        ))}
      </div>
      
      <div className="cart">
        <h2>Cart</h2>
        {cart.map((item, index) => (<p key={index}>{item.name} - ${item.price}</p>)
        )}
        <div className="cart-total">
          Total: ${total}
        </div>
      </div>
    </div>
  );
}
