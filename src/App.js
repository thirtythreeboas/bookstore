import React from 'react';
import NavBar from './components/navbar';
import GoodsComponent from './components/goods';
import Product from './components/product';
import AddDeleteComponent from './components/addToCart/addComponent';
import MainInfo from './components/addToCart/mainInfo';
import AddBook from './components/addToCart/addBook';
import MyBook from './components/addToCart/myBook';

class App extends React.Component {

  state = {
    data: [
        {
          amount: 0,
          addToFav: false,
          showDesc: false,
          key: 1,
          imageUrl: 'https://cdn1.ozone.ru/multimedia/wc1200/1005856564.jpg',
          name: 'Падение дома Ашеров',
          author: 'Эдгар Аллан По',
          weight: 193,
          price: 203,
          description: 'Эдгар Аллан По - человек ослепительного таланта. Его перу принадлежит более семидесяти новелл, обусловивших возникновение многих литературных школ. Основоположник детективного жанра и жанра научной фантастики, замечательный поэт, критик и журналист, Эдгар По вот уже более полутора столетий остается одним из самых читаемых авторов в мире.В настоящий том вошли наиболее известные произведения классика американской литературы.'
        },
        {
          amount: 0,
          addToFav: false,
          showDesc: false,
          key: 2,
          imageUrl: 'https://cdn1.ozone.ru/multimedia/wc500/1013306090.jpg',
          name: 'Политика | Аристотель',
          author: 'Аристотель',
          weight: 495,
          price: 532,
          description: 'Настоящее издание включает в себя одну из вершин античной политической мысли - трактат Аристотеля "Политика", в котором обобщены и систематизированы знания, относящиеся к самым разным областям общественной жизни. Перевод текста, предисловие и завершающий книгу очерк, в котором подробно и с привлечением большого количества редких и ценных источников анализируется развитие античной политической мысли, принадлежат перу выдающегося русского историка, академика Сергея Александровича Жебелева, который провел эту работу для издания "Политики" 1911 года. Текст Аристотеля снабжен подробными комментариями, подготовленными известным русским историком и филологом-классиком Аристидом Ивановичем Доватуром.'
        }
    ],
    createdProd: {},
    addBookWin: false
  };

  handleIncrement = inc => {
    const data = [...this.state.data];
    const index = data.indexOf(inc);
    data[index] = {...inc};
    data[index].amount++;
    this.setState({ data });
  };
  handleDecrement = dec => {
    const data = [...this.state.data];
    const index = data.indexOf(dec);
    data[index] = {...dec};
    data[index].amount--;
    this.setState({ data });
  };
  handleDelete = del => {
    const data = [...this.state.data];
    const index = data.indexOf(del);
    data[index] = {...del};
    const reset = this.state.data.filter(() => {
      data[index].amount = 0;
      return data;
    });
    this.setState({ data });
  };
  addToFavorites = add => {
    const data = [...this.state.data];
    const index = data.indexOf(add);
    data[index] = {...add};
    data[index].addToFav == false ?
      data[index].addToFav = true
      :
      data[index].addToFav = false;
    this.setState( {data} );
    console.log(data[index].addToFav);
  }
  handleDisplay = show => {
    const data = [...this.state.data];
    const index = data.indexOf(show);
    data[index] = {...show};
    data[index].showDesc === false ?
      data[index].showDesc = true
      :
      data[index].showDesc = false;
    this.setState( {data} );
    console.log(data[index].showDesc);
  };
  handleAmount = () => {
    let sum = 0;
    const arr = this.state.data;
    sum = arr.reduce((prev, cur) => {
      return prev + cur.amount;
    }, 0)
    return sum;
  };
  handleFavorites = () => {
    let sum = 0;
    const arr = this.state.data;
    sum = arr.reduce((prev, cur) => {
      return prev + cur.addToFav;
    }, 0)
    return sum;
  };
  handleReset = () => {
    const values = this.state.data.map(v => {
      v.amount = 0;
      v.addToFav = false;
      v.showDesc = false;
      return v;
    });
    this.setState( { values, createdProd: {} } );
  }
  handleAddBtn = () => {
    this.setState( { addBookWin: true } )
  };
  handleClose = () => {
    this.setState( { addBookWin: false } )
  }
  handleSubmit = e => {
    const name = document.getElementById('nameInput').value;
    const author = document.getElementById('authorInput').value;
    const mail = document.getElementById('mailInput').value;
    const desc = document.getElementById('descInput').value;

    const obj = {
        name: name,
        author: author,
        mail: mail,
        desc: desc
    };

    this.setState( {
      createdProd: obj,
      addBookWin: false
     } );
    e.preventDefault();
  };

  render () {
    const stateObject = this.state;
    const myBook = this.state.createdProd[0];

    return (
      <React.Fragment>
        <NavBar
          totalAmount={this.handleAmount}
          totalFavorites={this.handleFavorites}
          onReset={this.handleReset}
          onAdd={this.handleAddBtn}
        />
        <AddBook
          onBook={this.handleSubmit}
          onClose={this.handleClose}
          onChange={this.handleChange}
          show={this.state.addBookWin}
        />
        <main className="container d-flex justify-content-center">
          <Product
            list={stateObject}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onFavorites={this.addToFavorites}
            onDisplay={this.handleDisplay}
          />
        </main>
      </React.Fragment>
    );
  };
}

export default App;
