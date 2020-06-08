import React, { Component } from 'react';
import '../../stylesheet/bookstore.css';

const InfoComponent = ({item, list, onFavorites, onDisplay }) => {

  const favoritesBox = () => {
    const styles = {
      color: '#DC143C',
      borderRadius: '5px',
      textDecoration: 'underline',
    };
    return item.addToFav === true ?
      <button
        style={styles}
        className="custom-but"
        onClick={() => onFavorites(item)}>
        В избранном
      </button>
     :
      <button
        className="custom-but"
        onClick={() => onFavorites(item)}>
        В избранное
      </button>
  };

  const showDescription = () => {
    const styles = {
      color: '#009900',
      borderRadius: '5px',
      textDecoration: 'underline',
    };
    return item.showDesc === true ?
      <button
        style={styles}
        className="custom-but"
        onClick={() => onDisplay(item)}
      >
        Скрыть описание
      </button>
    :
      <button
        className="custom-but"
        onClick={() => onDisplay(item)}
      >
        Показать описание
      </button>;
  };

  return (
    <div className="wrapper">
      <img src={item.imageUrl} alt=""/>
      <div className="main-data">
        <p>{item.name}</p>
        <span className="author">{item.author}</span>
        <span className="weight">{item.weight}</span>
        <div>
          {favoritesBox()}
          {showDescription()}
        </div>
      </div>
    </div>
  );
}

export default InfoComponent;
