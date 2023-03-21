import logo from './logo.svg';
import './App.css';
import Book from "./components/Book";
import Search from "./components/Search";
import BookList from "./components/BookList";
import SelectedBook from './components/SelectedBook';
import { useState } from 'react';



function App() {
  const basicItems = {}

  // function firstGoogleSearch(term) {
  //  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40`)
  // .then(res => res.json())
  // .then(
  //   (result) => {
  //     console.log(result["items"]);
  //      return result["items"]
  //   }
  // );
  // };
  let firstBook = {
    title: "Peace",
    authors: [
      "Gene Wolfe"
    ],
    description: "Hailed as \"one of the literary giants of SF\" by the Denver Post, Gene Wolfe has repeatedly won the field's highest honors, including the Nebula, the Hugo, and the World Fantasy awards. Peace is Gene Wolfe's first full-length novel, a work that shows the genius that later flourished in such acclaimed works as The Fifth Head of Cerberus and The Book of The New Sun. Originally published in 1975, Peace is a spellbinding, brilliant tour de force of the imagination. The melancholy memoir of Alden Dennis Weer, an embittered old man living out his last days in a small midwestern town, the novel reveals a miraculous dimension as the narrative unfolds. For Weer's imagination has the power to obliterate time and reshape reality, transcending even death itself. Powerfully moving and uncompromisingly honest, Peace ranks alongside the finest literary works of our time.",
    thumbnail: "http://books.google.com/books/content?id=p9J8tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_apihttp://books.google.com/books/content?id=p9J8tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    infoLink: "http://books.google.co.jp/books?id=p9J8tgAACAAJ&dq=peace+gene+wolfe&hl=&source=gbs_api"

  };
  // let basicItems = [
  //   {"volumeInfo": {
  //     "imageLinks": {
  //       "thumbnail": "https://books.google.co.jp/books/publisher/content?id=kYjqAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72f5mK36SG4mRNfk4Q-RzrK24ssmIDK586NhtcZAMVio8xXOpPRzJUVsHgXhn_oPVG_Mq-MPZveu3a9zkb4Bqp3xv8-GYWHsKFtAhFZA04yyGeJ_whPYMcsWFWqSrZkKX3wCeQn"
  //     }
  //   }}
  // ];

  // const selectedImageUrl = imageUrl;
  const [selectedBookObject, setSelectedBookObject] = useState(firstBook);
  const changeSelectBook = (newSelectedBookObject) => {
    setSelectedBookObject(newSelectedBookObject);
  };
  // setSelectedImageUrl("");
  // const [imageUrls, setImageUrls] = useState(imageUrlsArr);
  const [url, setUrl] = useState(firstBook.thumbnail);

  const [items, setItems] = useState(basicItems);
  const changeUrl = (newUrl) => {
    setUrl(newUrl);
  }
  function googleSearch(term) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result["items"])
          if (result["totalItems"] >= 1) {
            setItems({});
            setItems(result["items"]);
          }
        }
      )
  };
  return (
    <div className="container">
      <div className="row">
        <div className='col-6 d-flex flex-column selected-book padding-scroll'>
          <Search googleSearch={googleSearch} />

            <SelectedBook bookObject={selectedBookObject} changeUrl={changeUrl} url={url}/>
        </div>
        <div className='col-6 selected-book'>
          <BookList items={items} changeSelectBook={changeSelectBook} changeUrl={changeUrl}/>
        </div>
      </div>
    </div>
  );
}

export default App;

{/* <header className="App-header"> */}
{/* </header> */}
