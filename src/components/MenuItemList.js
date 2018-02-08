import React from 'react';

const itemDimensions = {
  width: "40%",
  minWidth: "300px"
}

const MenuItemList = (props) => (
  <table style={itemDimensions}>
    <thead className="section-header">
      <tr className="container center column">
        <th>
          <h3>{props.title}</h3>
          <h4>{props.subheader && `$`}{props.subheader}</h4>
          <hr/>
          <br/>
        </th>
      </tr>
    </thead>
    <tbody className="container center column">
      {props.items.map((item) => (
        <tr key={item.itemName}>
          <td>{props.type === 'food' ? <a href="#" onClick={props.handleFoodImage}>{item.itemName}</a> : item.itemName}</td>
          <td>{!props.subheader && `$`}{item.itemCost}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MenuItemList;
