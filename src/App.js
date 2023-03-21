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
  const firstBook = {
      "title": "The Way of Kings",
      "subtitle": "The first book of the breathtaking epic Stormlight Archive from the worldwide fantasy sensation",
      "description": "'I loved this book. What else is there to say?' Patrick Rothfuss According to mythology mankind used to live in The Tranquiline Halls. Heaven. But then the Voidbringers assaulted and captured heaven, casting out God and men. Men took root on Roshar, the world of storms. And the Voidbringers followed... They came against man ten thousand times. To help them cope, the Almighty gave men powerful suits of armor and mystical weapons, known as Shardblades. Led by ten angelic Heralds and ten orders of knights known as Radiants, mankind finally won. Or so the legends say. Today, the only remnants of those supposed battles are the Shardblades, the possession of which makes a man nearly invincible on the battlefield. The entire world is at war with itself - and has been for centuries since the Radiants turned against mankind. Kings strive to win more Shardblades, each secretly wishing to be the one who will finally unite all of mankind under a single throne. On a world scoured down to the rock by terrifying hurricanes that blow through every few day a young spearman forced into the army of a Shardbearer, led to war against an enemy he doesn't understand and doesn't really want to fight. What happened deep in mankind's past? Why did the Radiants turn against mankind, and what happened to the magic they used to wield? Readers absolutely love The Way of Kings: 'Incredible, impressive or fantastic, all these words are an understatement to the quality this book holds. The Way of Kings is the beginning of a masterpiece series in epic fantasy' Novel Notions 'It's multi-POV, action-packed, heartfelt, exciting, thrilling, and I am running out of adjectives' Goodreads Reviewer, Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐ 'The story is mind-blowing, the ideas and thoughts create a world that is believable and intriguing. A strong tale with a well fleshed out world and multidimensional characters that are easy to care about' Goodreads Reviewer, Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐ 'The Way of Kings is a huge opening act to The Stormlight Archive which took every single one of these elements of a good fantasy story and elevated the art of storytelling to a different league' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐ 'Brandon Sanderson is probably the most gifted storyteller of his generation. He's a silent force that strikes you when you least expect it, and with The Way of Kings he introduces a series that will change the history of Fantasy' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐ 'I've been struck speechless. I've loved Sanderson's books in the past, but this one completely blew me away. I really wish I could give The Way of Kings a sixth star' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐",

      "thumbnail": "http://books.google.com/books/content?id=d-nv9nnEnVwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=d-nv9nnEnVwC&source=gbs_api"
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
