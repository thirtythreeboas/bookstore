import React, { Component } from 'react';
import '../stylesheet/goods.css';
// import Product from './product';
import AddDeleteComponent from './addToCart/addComponent';
import MainInfo from './addToCart/mainInfo';

class GoodsComponent extends React.Component {

  handleDisplayButton = () => {
    const {item} = this.props;
    return item.showDesc === true ? <div className="d-flex mt-2 break">{item.description}</div> : null;
  };

  render() {
    const {list, item, onIncrement, onDecrement, onDelete, onFavorites, onDisplay, stateObject } = this.props;
    return (
      <React.Fragment>
        <div className="book-desc">
          <MainInfo
            onFavorites={onFavorites}
            onDisplay={onDisplay}
            list={list}
            item={item}
          />
          <div className="priceCont">
            <span className="price">{item.price}</span>
          </div>
          <div className="addDeleteBox">
            <AddDeleteComponent
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
              list={list}
              item={item}
            />
          </div>
          {this.handleDisplayButton()}
        </div>
      </React.Fragment>
    );
  };
}

export default GoodsComponent;
