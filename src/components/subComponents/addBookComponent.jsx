import React, { Component } from 'react';
import '../../stylesheet/bookstore.css';

const AddBookComponent = ({show, onClose, onBook, bookInfo}) => {
    if (show === false) return null;

    return (
      <React.Fragment>
        <div className="popup-stl">
          <div className="d-flex justify-content-center position-relative">
            <button
            onClick={onClose}
            className="close-button">
              &times;
            </button>
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={onBook}>
              <fieldset className="d-flex">
                <legend>Основная информация</legend>
                <input
                  className="bookInput d-flex"
                  id="nameProd"
                  name="nameProd"
                  type="text"
                  placeholder="Название"/>
                <input
                  className="bookInput d-flex"
                  id="authorProd"
                  name="authorProd"
                  type="text"
                  placeholder="Автор"/>
                <input
                  className="bookInput d-flex"
                  id="mailProd"
                  name="mailProd"
                  type="email"
                  placeholder="Укажите вашу почту"/>
                <legend>Описание</legend>
                <textarea
                  className="bookInput"
                  id="descProd"
                  name="descProd"
                  maxLength="250"
                  placeholder="Краткое содержание книги">
                </textarea>
              </fieldset>
              <input
                className="addBookBtn"
                type="submit"
                value="Отправить"/>
            </form>
          </div>
        </div>
        <div
          onClick={onClose}
          className="overlay">
        </div>
      </React.Fragment>
    );

}

export default AddBookComponent;
