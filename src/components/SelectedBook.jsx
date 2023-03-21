import React from 'react';

import SelectedBookImage from './SelectedBookImage';

const SelectedBook = (props) => {
  const { bookObject, changeUrl, url} = props;
  const defaultImage = bookObject.thumbnail.replaceAll("zoom=0", "zoom=1" );
  const largerImage = bookObject.thumbnail.replaceAll("zoom=1", "zoom=0" );
  const makeImageSmall = () => {
    changeUrl(defaultImage)
  };
  const makeImageLarge = () => {
    changeUrl(largerImage)
    // setUrl(bookObject.thumbnail)

  };
  console.log(bookObject)
  return (
    <div>
      <div>
        <button onClick={makeImageSmall}>small image</button>
        <button onClick={makeImageLarge}>large image</button>
      </div>
      <SelectedBookImage url={url}/>
      <h2>{bookObject.title}</h2>
      <p>{bookObject.description}</p>
      <a href={bookObject.infoLink}>
        <button>Buy</button>
      </a>
    </div>

  );
};

export default SelectedBook;
