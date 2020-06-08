import React, { Component } from 'react';
import '../stylesheet/bookstore.css';
import CartComponent from './subComponents/cartComponent';
import InfoComponent from './subComponents/infoComponent';

class BookContainer extends React.Component {

  handleDisplayButton = () => {
    const {item} = this.props;
    return item.showDesc === true ? <div className="d-flex mt-2 break">{item.description}</div> : null;
  };

  render() {
    const {list, item, onIncrement, onFavorites, onDisplay} = this.props;
    return (
      <div className="bookComponent">
        <div className="book-desc" >
          <InfoComponent
            onFavorites={onFavorites}
            onDisplay={onDisplay}
            list={list}
            item={item}
          />
          <div className="priceCont">
            <span className="price">{item.price}</span>
          </div>
          <div className="addDeleteBox">
            <CartComponent
              onIncrement={onIncrement}
              list={list}
              item={item}
            />
          </div>
          {this.handleDisplayButton()}
        </div>
      </div>
    );
  };
}

export default BookContainer;
