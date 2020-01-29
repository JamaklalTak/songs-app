import React from 'react';

const Image = (props) => {
  const { src, alt, onClick } = props;
  return(
    <img
      src={src}
      alt={alt || 'imageAlt'}
      onClick={onClick}
    />
  )
}

export default Image;