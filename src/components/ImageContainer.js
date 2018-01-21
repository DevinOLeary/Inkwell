import React from 'react';
import {Parallax} from 'react-parallax';


const ImageContainer = (props) => {
  return (
    <div>
      <Parallax
      bgImage={props.image}
      bgImageAlt="the inkwell"
      strength={100}
      >
        <div className="container text-container inverse text-center">
          {props.children}
        </div>
      </Parallax>
    </div>
  );
}

export default ImageContainer;
