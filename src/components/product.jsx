import React, { Component } from 'react';
import GoodsComponent from './goods';
import MyBook from './addToCart/myBook';

class Product extends React.Component {
  render() {
    const { list, onIncrement, onDecrement, onDelete, onFavorites, onDisplay } = this.props;
    if(!list) {
      return null;
    }

    return (
      <div>
        <MyBook
          list={list}
        />
        {list.data.map(item =>
          <GoodsComponent
            list={list}
            key={item.key}
            item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDisplay={onDisplay}
            onDelete={onDelete}
            onFavorites={onFavorites}
          />
        )}
      </div>
    );
  }
}

export default Product;
