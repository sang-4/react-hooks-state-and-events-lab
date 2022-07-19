import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleCart(){
    setIsInCart(()=>!isInCart)
  }
  return (
    <li className={isInCart ? "in-cart" : ""} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleCart}>{isInCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );

}

export default Item;