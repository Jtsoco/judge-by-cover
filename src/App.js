import logo from './logo.svg';
import './App.css';
import Book from "./components/Book";
import Search from "./components/Search";
import BookList from "./components/BookList";



function App() {
  return (
    <div className="container">
      <div className="row">

        <div className='col-6'>
          <Search />
          <Book imageUrl="https://books.google.co.jp/books/content?id=6euuGTGqRz8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE709PE7hH1s-4ppDGHaOh67lgfq5DF7Tn_tjPSConXHW34wBf0Ude61UwA9-qwNPibFTm0Des7qkzpTFzZqhAg-gQAArq1CD-e5Z1H1Q1Vy4JSx3hcSC54oLjOIB5MFbkBe4pmqP"/>
        </div>
        <div className='col-6'>
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;

{/* <header className="App-header"> */}
{/* </header> */}
