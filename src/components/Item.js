import React from "react";

function Item({ item, onUpdateItem }) {

  function handleAddToCart(){
    // console.log('clicked item:', item)
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },body: JSON.stringify({isInCart:!item.isInCart,
      })
    })
      .then(response => response.json())
      .then(updatedItem => onUpdateItem(updatedItem));
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}
      onClick={handleAddToCart}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
    </li>
  );
}

export default Item;
