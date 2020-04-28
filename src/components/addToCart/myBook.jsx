import React, { Component } from 'react';
import '../../stylesheet/goods.css';

class MyBook extends React.Component {

  styles={
    width: '200px'
  }



  render() {
    const { list } = this.props;
    if ( Object.keys(list.createdProd) <= 0  ) {
      return null;
    }

    const data = list.createdProd;

    return (
        <div className="book-desc bg-light">
          <div className="d-flex">
            <div className="wrapper mr-5">
              <img src='https://sun9-39.userapi.com/c857324/v857324236/1775a4/yhtvi1NCFFY.jpg' alt=""/>
              <div className="main-data">
                <p>{data.name}</p>
                <span className="author">{data.author}</span>
                <span className="author">{data.mail}</span>
              </div>
            </div>
            <div className="d-flex">{data.desc}</div>
          </div>
        </div>
    );
  };
};

export default MyBook;
