import React from 'react';
import Book from "./Book";


const BookList = (props) => {
  const { items, setSelectedBookObject } = props;
  console.log(items);
  // const imgUrls = filterOne.map(item => item["volumeInfo"]["imageLinks"]["thumbnail"]);
  // const imgUrlsBig = imgUrls.map(url => url.replace("zoom=1", "zoom=0"));
  if (Object.keys(items).length === 0) {
    return <div>Nothing here yet!</div>
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
          <Book bookObject={filteredHash} key={filteredHash.infoLink + filteredHash.thumbnail} setSelectedBookObject={setSelectedBookObject}/>
        </div>

          ) }
      </div>
    </div>
  ); }
};

export default BookList;
