import React, { Component } from 'react';
import BookContainer from './bookComponent';
import SellBookComponent from './subComponents/sellBookComponent';
import SortComponent from './subComponents/sortComponent';
import '../stylesheet/bookstore.css';

class Product extends React.Component {

  render() {
    const { list, onIncrement, onFavorites, onDisplay, onDispBlock, onSort } = this.props;
    if(!list) {
      return null;
    };

    return (
      <div className="shopList">
        <SortComponent
          onSort={onSort}/>
        {list.createdProd.map(item =>
            <SellBookComponent
              key={item.authorProd}
              list={list}
              item={item}/>
        )}
        {list.data.map(item =>
            item.displaySearch
            ? <BookContainer
              list={list}
              key={item.key}
              item={item}
              onIncrement={onIncrement}
              onFavorites={onFavorites}
              onDisplay={onDisplay}
              onDispBlock={onDispBlock}/>
            : null
          )}
      </div>
    );
  }
}

export default Product;
