import React from 'react';
import Media from 'react-media';

const itemDimensions = {
  width: "40%",
  minWidth: "300px",
  marginBottom: "15px"
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
      {props.items.map((item) => {
      return  <tr key={item.itemName}>
          <Media query="(min-width: 700px)">
            {matches =>
              matches ?
              <td>{props.type === 'food' && item.itemImage ? <a href="#" onClick={props.handleFoodImage}>{item.itemName}</a> : item.itemName}</td>
              :
              <td>{item.itemName}</td>
            }
          </Media>
          <td>{!props.subheader && `$`}{item.itemCost}</td>
        </tr>
      })}
    </tbody>
  </table>
);

export default MenuItemList;
