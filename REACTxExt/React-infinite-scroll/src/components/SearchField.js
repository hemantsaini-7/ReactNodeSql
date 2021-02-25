import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
function SearchField() {
  const [text, setText] = useState("");
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    FetchAllImages();
  }, []);

  const FetchAllImages = () => {
    Axios.get(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_ACCESSKEY}&page=1&query=${text}`
    ).then((res) => {
      setAllImages([...allImages, ...res.data.results]);
    });
    console.log(allImages);
  };

  return (
    <>
      <input
        type='text'
        className='s-field'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={FetchAllImages}>
        <i className='fa fa-search' />
      </button>
    </>
  );
}

export default SearchField;
