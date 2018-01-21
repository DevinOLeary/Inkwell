import React from 'react';

const itemDimensions = {
  width: "40%",
  minWidth: "300px",
}

function pairsArray(str){
  // turns a string into an array, and then loops through and
  // creates a new array where i and i+1 are paired together
  const arr = str.split(",");
  const pairs = [];
  for(let i = 0; i < arr.length; i+=2){
    if(i+1 !== undefined){
      pairs.push([arr[i], arr[i+1]]);
    } else {
      pairs.push([arr[i]]);
    }
  }
  return pairs;
}

const MenuItemList = (props) => (
  <table style={itemDimensions}>
    <thead className="section-header">
      <tr className="container center column">
        <th>
          <h3>{props.title}</h3>
          <h4>{props.subheader}</h4>
          <hr/>
          <br/>
        </th>
      </tr>
    </thead>
    <tbody className="container center column">
      {pairsArray(props.acf).map((pair) => (
        <tr key={pair[0]}>
          <td>{pair[0]}</td>
          <td>{pair[1]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MenuItemList;
