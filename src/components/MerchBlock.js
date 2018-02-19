import React from 'react';

const merchContainer = {
  boxShadow: "1px 0px 5px",
  width: "100%",
  justifyContent: "flex-start",
  padding: '5vw 0px'
}

const merchItem = {
  margin: "20px"
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
    <li key={node.node.merchName} className="container column" style={merchItem}>
      {node.node.merchImage && <img src={node.node.merchImage.file.url} alt={node.node.merchName} style={imgStyle}/>}
      <h4>{node.node.merchName}</h4>
      <h4>${node.node.merchCost}</h4>
      {node.node.merchDescription && <p dangerouslySetInnerHTML={{ __html: node.node.merchDescription.childMarkdownRemark.html }}/>}
    </li>
  ));
  return(
    <div style={merchContainer} className="container center column">
      <ul className="container row">
        {merchList}
      </ul>
      <br/>
      <h4>- please inquire in shop to purchase</h4>
    </div>
  );
}

export default MerchBlock;
