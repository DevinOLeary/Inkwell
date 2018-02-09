import React from 'react';

const merchContainer = {
  boxShadow: "1px 0px 5px",
  width: "100%",
  justifyContent: "flex-start",
  padding: '5vw 0px'
}

const imgStyle = {
  width: '20vw',
  height: '20vw',
  maxWidth: '200px',
  minWidth: '100px',
  objectFit: 'cover'
}

const MerchBlock = (props) => {
  const merchList = props.items.map((node) => (
    <li key={node.node.merchName} className="container column">
      <img src={node.node.merchImage.file.url} alt={node.node.merchName} style={imgStyle}/>
      <h4>{node.node.merchName}</h4>
      <h4>${node.node.merchCost}</h4>
    </li>
  ));
  return(
    <div style={merchContainer} className="container center column">
      <ul>
        {merchList}
      </ul>
      <br/>
      <br/>
      <button className="button-action">view more merch</button>
    </div>
  );
}

export default MerchBlock;
