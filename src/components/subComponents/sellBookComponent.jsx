import React, { Component } from 'react';
import '../../stylesheet/bookstore.css';

class SellBookComponent extends React.Component {

  render() {
    const { list, item } = this.props;
    if ( list.createdProd.length === 0 ) {
      return null;
    }

    return (
        <div className="sell-info">
            <div className="sell-cont">
              <img src='https://sun9-39.userapi.com/c857324/v857324236/1775a4/yhtvi1NCFFY.jpg' alt=""/>
              <div className="sell-data">
                <p>{item.nameProd}</p>
                <span className="sell-name">{item.authorProd}</span>
                <span className="sell-name">{item.mailProd}</span>
              </div>
            </div>
            <div className="sell-desc">{item.descProd}</div>
        </div>
    );
  };
};

export default SellBookComponent;
