import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {

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

  function handleDeleteClick(){
    fetch (`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => onDeleteItem(item))
  }



  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}
      onClick={handleAddToCart}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Item;
