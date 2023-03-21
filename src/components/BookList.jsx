import React from 'react';
import Book from "./Book";


const BookList = (props) => {
  const { items, changeSelectBook, changeUrl} = props;
  console.log(items);
  // const imgUrls = filterOne.map(item => item["volumeInfo"]["imageLinks"]["thumbnail"]);
  // const imgUrlsBig = imgUrls.map(url => url.replace("zoom=1", "zoom=0"));
  if (Object.keys(items).length === 0) {
    return <div className='d-flex flex-column align-items-center mt-4 p-5 my-card'>
      <h2>Judge a book by its cover!</h2>
      <h4 className='text-center'>Just search some keywords in the search bar, whatever you're feeling, and hit enter. Click them for more info! If the book interests you, the book's google store page is only a click away.</h4>


    </div>
  }
  else {
    const filterOne = items.filter(item => "imageLinks" in item["volumeInfo"]);
    const filteredHashes = filterOne.map((item) => {
      let volumeInfo = item.volumeInfo
      let hash = {
        title: volumeInfo.title,
        description: volumeInfo.description,
        infoLink: volumeInfo.infoLink,
        thumbnail: volumeInfo.imageLinks.thumbnail
      }
      return hash
    });
  return (
    <div className="container">
      <div className="row">
        {filteredHashes.map( filteredHash =>

        <div className='col-lg-4 col-md-6 col-sm-12 mt-3' key={filteredHash.infoLink + filteredHash.thumbnail}>
          <Book bookObject={filteredHash} key={filteredHash.infoLink + filteredHash.thumbnail} changeSelectBook={changeSelectBook} changeUrl={changeUrl}/>
        </div>

          ) }
      </div>
    </div>
  ); }
};

export default BookList;
