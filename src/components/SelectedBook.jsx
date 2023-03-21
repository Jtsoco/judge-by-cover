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
      <div className='d-flex flex-column justify-content-center align-items-center pt-5'>
          <div className='w-100'>

            <h2>{bookObject.title}</h2>
          </div>
          <div className='pb-3 d-flex w-100'>
            <div className='margin-right'>

              <button className='btn btn-primary' onClick={makeImageSmall}>small image</button>
            </div>
            <div className='margin-right'>

              <button className="btn btn-primary" onClick={makeImageLarge}>large image</button>
            </div>
            <div className='margin-right'>

              <a href={bookObject.infoLink}>
              <button className='btn btn-primary'>Buy</button>
             </a>
            </div>
          </div>
          <div className='my-card'>
            <SelectedBookImage url={url}/>
            <p className='padding-para'>{bookObject.description}</p>
          </div>
      </div>

  );
};

export default SelectedBook;
