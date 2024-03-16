// TODO: create a component that displays a single bakery item
import React from 'react';

export default function BakeryItem({ name, description, price, image, addToCart }) {
  return (
    <div className="bakery-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
