import React, { Component } from 'react';
import '../stylesheet/goods.css';

class NavBar extends React.Component {

  styles = {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '400',
    fontSize: '20px',
    backgroundColor: '#fff280',
    borderRadius: '5px',
    marginLeft: '5px',
    lineHeight: '20px',
    color: '#000'
  };

  btnStl = {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '200',
    fontSize: '20px',
    backgroundColor: '#fff280',
    borderRadius: '5px',
    marginLeft: '5px',
    lineHeight: '20px',
    color: '#000',
    cursor: 'pointer'
  };

  render() {
    const { totalAmount, totalFavorites, onReset, onAdd } = this.props;
    return (
      <div style={ {backgroundColor: '#FFFACD'} }>
        <nav className="navbar navbar-expand-lg navbar-light">
          <span className="navbar-brand" href="#">
            Magazik
          </span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item nav-link">
                Корзина
                <span style={this.styles} className="badge badge-pill ">{totalAmount()}</span>
              </li>
              <li className="nav-item nav-link">
                Избранное
                <span style={this.styles} className="badge badge-pill ">{totalFavorites()}</span>
              </li>
              <li className="nav-item nav-link">
                Предложить
                <span
                  style={this.btnStl}
                  data-modal-target="#modal"
                  className="hoverBookBtn badge-pill badge"
                  onClick={onAdd}
                >
                  Добавить книгу
                </span>
              </li>
              <li className="nav-item nav-link">
                Удалить всё
                <span
                  style={this.btnStl}
                  className="hoverResetBtn badge-pill badge openSelector"
                  onClick={onReset}
                >
                  Reset
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  };
};
export default NavBar;
