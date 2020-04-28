import React, { Component } from 'react';
import '../../stylesheet/goods.css';

const AddDeleteComponent = ({item, list, onIncrement, onDecrement, onDelete}) => {
  const addButton = () => {
    return item.amount !== 0 ? (
        <div className="btn-box">
          <button
            className="pm-button plus-button"
            onClick={() => onIncrement(item)}
          >+</button>
          <button
            className="pm-button minus-button"
            onClick={() => onDecrement(item)}
          >-</button>
        </div>
      ) : (
        <button
          className="custom-but def-btn"
          onClick={() => onIncrement(item)}
        >
          В корзину
        </button>
      )
  };

  return (
    <React.Fragment>
      <span>{item.amount}</span>
      {addButton(item, onIncrement, onDecrement)}
      <button
        className="custom-but def-btn"
        onClick={() => onDelete(item)}
        >
        Удалить
      </button>
    </React.Fragment>
  );
}

export default AddDeleteComponent;
