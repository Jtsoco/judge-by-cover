import logo from './logo.svg';
import './App.css';
import Book from "./components/Book";
import Search from "./components/Search";
import BookList from "./components/BookList";
import { useState } from 'react';



function App() {
  const imageUrlsArr = ["https://books.google.co.jp/books/content?id=6euuGTGqRz8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE709PE7hH1s-4ppDGHaOh67lgfq5DF7Tn_tjPSConXHW34wBf0Ude61UwA9-qwNPibFTm0Des7qkzpTFzZqhAg-gQAArq1CD-e5Z1H1Q1Vy4JSx3hcSC54oLjOIB5MFbkBe4pmqP", "https://books.google.co.jp/books/content?id=hRqWPwAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7180OTIFEto_ZZ8FkVpg3mZchk5K644LKeLMibGhFjbDe9IWHbjDBk6fMADiArxr9YZi9YSL8-9SgR2XEMOfVTPoVSkXt4Ckx3Ai3eo0qTwxC1xjN300LJioZW0LDDHOvDF5P53", "https://books.google.co.jp/books/content?id=OHclhBVv-X4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73Z2wcC4j9elFXzl1sD50frccrsaDWAa0K1a_CRi4T8JT094uKdnK_TH561TRSvO4tdNQD5ionnwMjBrSD-7VBfDLFSTYp5dLrKwTUZiXQ5DT4tRAfF3oWePzqGmAUt90NVM4ie", "https://books.google.co.jp/books/publisher/content?id=kYjqAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72f5mK36SG4mRNfk4Q-RzrK24ssmIDK586NhtcZAMVio8xXOpPRzJUVsHgXhn_oPVG_Mq-MPZveu3a9zkb4Bqp3xv8-GYWHsKFtAhFZA04yyGeJ_whPYMcsWFWqSrZkKX3wCeQn" ];
  const basicItems = [
    {"volumeInfo": {
      "imageLinks": {
        "thumbnail": "https://books.google.co.jp/books/publisher/content?id=kYjqAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72f5mK36SG4mRNfk4Q-RzrK24ssmIDK586NhtcZAMVio8xXOpPRzJUVsHgXhn_oPVG_Mq-MPZveu3a9zkb4Bqp3xv8-GYWHsKFtAhFZA04yyGeJ_whPYMcsWFWqSrZkKX3wCeQn"
      }
    }}
  ]
  const imageUrl="https://books.google.co.jp/books/content?id=6euuGTGqRz8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE709PE7hH1s-4ppDGHaOh67lgfq5DF7Tn_tjPSConXHW34wBf0Ude61UwA9-qwNPibFTm0Des7qkzpTFzZqhAg-gQAArq1CD-e5Z1H1Q1Vy4JSx3hcSC54oLjOIB5MFbkBe4pmqP";
  // const selectedImageUrl = imageUrl;
  const [selectedImageUrl, setSelectedImageUrl] = useState(imageUrl);
  // setSelectedImageUrl("");
  const [imageUrls, setImageUrls] = useState(imageUrlsArr);
  const [items, setItems] = useState(basicItems);

  function googleSearch(term) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result["items"])
          if (result["totalItems"] >= 1) {

            setItems(result["items"]);
          }
        }
      )
  };
  return (
    <div className="container">
      <div className="row">

        <div className='col-6 d-flex flex-column align-items-center'>

          <Search googleSearch={googleSearch} setItems={setItems} />
          <div className='selected-book'>
          {/* TODO: add a small image and large image button to the special book
          also add the info for extra book stuff, like author and title */}
          <Book imageUrl={selectedImageUrl} setSelectedImageUrl={setSelectedImageUrl}/>
          </div>
        </div>
        <div className='col-6'>
          <BookList items={items} setSelectedImageUrl={setSelectedImageUrl}/>
        </div>
      </div>
    </div>
  );
}

export default App;

{/* <header className="App-header"> */}
{/* </header> */}
