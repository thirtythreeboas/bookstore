import React, { Component } from 'react';
import '../../stylesheet/goods.css';

const AddBook = ({show, onClose, onBook, onChange}) => {
    if (show === false) return null;

    return (
      <React.Fragment>
        <div className="popup-stl">
          <div className="d-flex justify-content-center position-relative">
            <button
            onClick={onClose}
            className="close-button"
            >
              &times;
            </button>
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={onBook}
            >
              <fieldset className="d-flex">
                <legend>Основная информация</legend>
                <input id="nameInput" className="bookInput d-flex" type="text" name="field1" placeholder="Название" />
                <input id="authorInput" className="bookInput d-flex" type="text" name="field2" placeholder="Автор" />
                <input id="mailInput" className="bookInput d-flex" type="email" name="field2" placeholder="Укажите вашу почту" />
              </fieldset>
              <fieldset className="d-flex">
                <legend>Описание</legend>
                <textarea id="descInput" className="bookInput" name="field3" placeholder="Краткое содержание книги"></textarea>
              </fieldset>
              <input
                className="addBookBtn"
                type="submit"
                value="Отправить"
              />
            </form>
          </div>
        </div>
        <div
          onClick={onClose}
          className="overlay"
        >
        </div>
      </React.Fragment>
    );

}

export default AddBook;
