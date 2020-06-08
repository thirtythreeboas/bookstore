import React, { Component } from 'react';
import '../../stylesheet/bookstore.css';

const CartComponent = ({item, list, onIncrement}) => {

  const addButton = () => {
    return item.amount !== 0 ? (
        <div className="btn-box">
          <button
            name="plus"
            className="pm-button plus-button increm"
            onClick={e => onIncrement(item, e.target)}
          >+</button>
          <button
            name="minus"
            className="pm-button minus-button decrem"
            onClick={e => onIncrement(item, e.target)}
          >-</button>
        </div>
      ) : (
        <button
          name="plus"
          className="custom-but def-btn increm"
          onClick={e => onIncrement(item, e.target)}
        >
          В корзину
        </button>
      )
  };

  return (
    <React.Fragment>
      <span>{item.amount}</span>
      {addButton(item, onIncrement)}
      <button
        name="zero"
        className="custom-but def-btn"
        onClick={e => onIncrement(item, e.target)}
        >
        Удалить
      </button>
    </React.Fragment>
  );
}

export default CartComponent;
