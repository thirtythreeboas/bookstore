import React from 'react';
import './stylesheet/bookstore.css';
import NavBar from './components/navbar';
import Product from './components/product';
import CartComponent from './components/subComponents/cartComponent';
import AddBookComponent from './components/subComponents/addBookComponent';
import SortComponent from './components/subComponents/sortComponent';

class App extends React.Component {

  state = {
    data: [
        {
          amount: 0,
          addToFav: false,
          showDesc: false,
          displaySearch: true,
          key: 1,
          imageUrl: 'https://sun2.43222.userapi.com/ree3cok8nwqROMoT1-Hj3mdXxC4A_PEubPbTqQ/hv2JHgr9mkY.jpg',
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
          displaySearch: true,
          key: 2,
          imageUrl: 'https://sun9-32.userapi.com/c858024/v858024458/202137/8i1Yx1UzIeA.jpg',
          name: 'Политика | Аристотель',
          author: 'Аристотель',
          weight: 495,
          price: 532,
          description: 'Настоящее издание включает в себя одну из вершин античной политической мысли - трактат Аристотеля "Политика", в котором обобщены и систематизированы знания, относящиеся к самым разным областям общественной жизни. Перевод текста, предисловие и завершающий книгу очерк, в котором подробно и с привлечением большого количества редких и ценных источников анализируется развитие античной политической мысли, принадлежат перу выдающегося русского историка, академика Сергея Александровича Жебелева, который провел эту работу для издания "Политики" 1911 года. Текст Аристотеля снабжен подробными комментариями, подготовленными известным русским историком и филологом-классиком Аристидом Ивановичем Доватуром.'
        },
        {
          amount: 0,
          addToFav: false,
          showDesc: false,
          displaySearch: true,
          key: 3,
          imageUrl: 'https://sun9-65.userapi.com/c858532/v858532072/1aed1f/F0Yo2rv6HIg.jpg',
          name: 'Возвращение в Брайдсхед. Незабвенная',
          author: 'Ивлин Во',
          weight: 342,
          price: 425,
          description: '"Возвращение в Брайдсхед" (1944) - одна из величайших книг прошлого столетия. Она входит в список 100 лучших англоязычных романов ХХ века по версии издательства "Modern Library", дважды экранизирована и переведена на все ведущие языки мира. История непростых отношений художника Чарльза Райдера с представителями эксцентричной аристократической семьи Флайт. История дружбы и ее утраты, любви и предательства, веры и фанатизма. Но прежде всего - это история заката эпохи "золотых двадцатых" с ее беззаботной жизнью, роскошными поместьями и шумными вечеринками. "Незабвенная" (1948). Смерть лучшего друга приводит Денниса Барлоу в похоронную фирму "Шелестящий дол". Здесь скорбящих называют Ждущими Своего Часа, а покойников - Незабвенными. Здесь смерть принимает различные обличья, а преподносят ее как рождественский подарок. И именно здесь Деннис влюбляется в Эме Танатогенос, сотрудницу "Шелестящего дола". Но очень скоро их отношения, поначалу идеальные, начинают развиваться в весьма...'
        },
        {
          amount: 0,
          addToFav: false,
          showDesc: false,
          displaySearch: true,
          key: 4,
          imageUrl: 'https://img3.labirint.ru/rc/8c43ac31b135e0f697561e19398144b2/220x340/books64/635073/cover.jpg?1564083827',
          name: 'Логико-философский трактат',
          author: 'Витгенштейн Людвиг',
          weight: 250,
          price: 369,
          description: 'Людвиг Витгенштейн - британский философ австрийского происхождения, один из самых оригинальных мыслителей европейской философии ХХ века, создатель теории построения искусственного "идеального" языка, основанного на языке математической логики.Текст "Логико-философского трактата" едва ли можно назвать объемным, однако трудно переоценить его значимость для всей последующей европейской философии, и краткость в данном случае говорит лишь о том, насколько сжато, четко и точно Витгенштейн формулировал свою мысль. Семь коротких тезисов и чуть больше сотни страниц комментариев к ним… но в этот минимальный объем Витгенштейн сумел вместить перевод на философский язык всех главных идей логического анализа. "В начале было Слово", - гласит Библия, и если это так, то Витгенштейн был одним из самых преданных учеников Логоса.'
        },
        {
          amount: 0,
          addToFav: false,
          showDesc: false,
          displaySearch: true,
          key: 5,
          imageUrl: 'https://static.my-shop.ru/product/3/130/1295924.jpg',
          name: 'Посмертные записки Пиквикского клуба',
          author: 'Диккенс Чарльз',
          weight: 410,
          price: 171,
          description: 'Почитаемый во всем мире Чарльз Диккенс всегда пользовался признанием и в России. Своим любимым писателем его называл Ф.М. Достоевский. Л.Н. Толстой ставил романы Диккенса в первый ряд мировой литературы, отмечая присущие им значительность содержания, мастерство формы, искренность и "нравственное отношение автора к предмету". Все эти качества в полной мере относятся и к роману "Посмертные записки Пиквикского клуба", который вышел в свет отдельным изданием в 1837 году и сразу же сделал автора знаменитым. Веселый, остроумный, полный великолепного английского юмора роман о клубе смешных, симпатичных джентльменов, путешествующих по стране, многие годы является одной из любимых книг читателей всего мира.'
        },
        {
          amount: 0,
          addToFav: false,
          showDesc: false,
          displaySearch: true,
          key: 6,
          imageUrl: 'https://cdn1.ozone.ru/multimedia/wc1200/1013420559.jpg',
          name: 'Жюстина, или Несчастья добродетели',
          author: 'Маркиз де Сад',
          weight: 235,
          price: 300,
          description: 'Маркиз де Сад (Донасьен Альфонс Франсуа де Сад) - одна из наиболее скандальных персон в истории мировой литературы и культуры в целом. Роман "Жюстина, или Несчастья добродетели" - первое произведение де Сада, опубликованное при его жизни, в 1791 году, без указания имени автора. "Жюстина" - один из самых знаменитых откровенных романов фривольного XVIII века. Эта книга заставляет невольно содрогнуться: добродетель обречена на страдания, а порок торжествует.'
        },
        {
          amount: 0,
          addToFav: false,
          showDesc: false,
          displaySearch: true,
          key: 7,
          imageUrl: 'https://kniga.lv/wp-content/uploads/2020/04/itd000000000595799_cover1.jpg',
          name: 'Доктор Живаго',
          author: 'Борис Пастернак',
          weight: 440,
          price: 140,
          description: 'Роман "Доктор Живаго" - одно из выдающихся произведений русской литературы, на протяжении долгих лет остававшееся закрытым для широкого круга читателей в нашей стране, знавших о нем только по скандальной и недобросовестной партийной критике. Незащищенность и бессмертие творческой личности, интеллигента и художника в переломные моменты жизни нашего народа - центральная тема итоговой книги лауреата Нобелевской премии Бориса Леонидовича Пастернака (1890-196О). Судьба романа, судьба его автора и ткань самого произведения неразрывны в восприятии сегодняшнего читателя.'
        }
    ],
    createdProd: [],
    popupWindow: false
  };

  handleIncrement = (inc, evt) => {
    const data = [...this.state.data];
    const index = data.indexOf(inc);
    data[index] = {...inc};
    if (evt.name === "plus") {
      data[index].amount++
    } else if (evt.name === "zero") {
      data[index].amount = 0;
    } else {
      data[index].amount--
    };
    this.setState({ data });
  };
  addToFavorites = add => {
    const data = [...this.state.data];
    const index = data.indexOf(add);
    data[index] = {...add};
    data[index].addToFav === false
    ? data[index].addToFav = true
    : data[index].addToFav = false;
    this.setState( {data} );
  };
  handleDisplay = show => {
    const data = [...this.state.data];
    const index = data.indexOf(show);
    data[index] = {...show};
    data[index].showDesc === false
    ? data[index].showDesc = true
    : data[index].showDesc = false;
    this.setState( {data} );
  };
  handleAmount = () => {
    let sum = 0;
    const arr = this.state.data;
    sum = arr.reduce((prev, cur) => {
      return prev + cur.amount;
    }, 0)
    return sum;};
  handleFavorites = () => {
    let sum = 0;
    const arr = this.state.data;
    sum = arr.reduce((prev, cur) => {
      return prev + cur.addToFav;
    }, 0)
    return sum;
  };
  handleReset = () => {
    const data = [...this.state.data];
    data.map(key => {
      key.amount = 0;
      key.addToFav = false;
      key.showDesc = false;
    });
    data.sort((a,b) =>
      (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0)
    );
    this.setState(
      prevState => ({
        data,
        createdProd: []
      })
    );
  };
  handleClose = () => {
    const bool = this.state;
    bool.popupWindow === false
    ? bool.popupWindow = true
    : bool.popupWindow = false
    this.setState({bool})
  };
  handleSubmit = e => {
    e.preventDefault();

    let name = document.getElementById('nameProd').value;
    let author = document.getElementById('authorProd').value;
    let mail = document.getElementById('mailProd').value;
    let desc = document.getElementById('descProd').value;

    if (name === "" || author === "" || mail === "" || desc === "") {
      alert("Поля ввода не заполнены. Введите данные.")
      return null
    };

    let obj = {
      nameProd: name,
      authorProd: author,
      mailProd: mail,
      descProd: desc
    };

    this.setState({
      createdProd: [...this.state.createdProd, obj]
    }, () => console.log(this.state.createdProd));
    this.handleClose();
  };
  handleSearch = evt => {
    evt.preventDefault();
    let currentList = [...this.state.data];
    if (evt.target.value !== "") {
      currentList.map(item => {
        const filter = evt.target.value.toLowerCase();
        if (!(item.name.toLowerCase().includes(filter) || item.author.toLowerCase().includes(filter))) {
          item.displaySearch = false;
          return item;
        } else {
          item.displaySearch = true;
          return item;
        }
      });
      this.setState({currentList});
    }
    if (evt.target.value.length === 0) {
      currentList.map(item => {
        item.displaySearch = true;
        return item;
      });
      this.setState({currentList});
    }
  };
  handleSort = evt => {
    let data = [...this.state.data];
    let name = evt.name;
    if (name === "name") {
      data.sort((a,b) =>
      (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    } else if (name === "author") {
      data.sort((a,b) =>
      (a.author > b.author) ? 1 : ((b.author > a.author) ? -1 : 0));
    } else if (name === "price") {
      data.sort((a,b) =>
      (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    } else if (name === 'reverse') {
      data.reverse();
    } else if (name === "default") {
      data.sort((a,b) =>
      (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0));
    }
    this.setState({data});
  };

  render () {
    return (
      <React.Fragment>
        <NavBar
          totalAmount={this.handleAmount}
          totalFavorites={this.handleFavorites}
          onReset={this.handleReset}
          onClose={this.handleClose}
          onSearch={this.handleSearch}/>
        <AddBookComponent
          onBook={this.handleSubmit}
          onClose={this.handleClose}
          show={this.state.popupWindow}
          bookInfo={this.state.createdProd}/>
        <main className="container">
          <Product
            list={this.state}
            onIncrement={this.handleIncrement}
            onFavorites={this.addToFavorites}
            onDisplay={this.handleDisplay}
            onSort={this.handleSort}/>
        </main>
      </React.Fragment>
    );
  };
}

export default App;
