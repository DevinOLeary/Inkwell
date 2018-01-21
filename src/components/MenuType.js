import React from 'react';
import {Transition} from 'react-transition-group';

import MenuItemList from './MenuItemList';
import Animations from './Animations';

const menuBlockDimensions = {
  padding: "2vw",
  paddingBottom: "50px"
}

const MenuType = (props) => (
  <div className="container" style={menuBlockDimensions}>
    <Transition
      timeout={300}
      key={props.type}
      onEnter={el => Animations.animateBlock(el, props.type)}
      in={props.in}
    >
      <div className="menu-list-item">
      {props.menuContent.map((node, i) => (
          <MenuItemList key={node.node.title} title={node.node.title} subheader={node.node.acf.menu_subheader} acf={node.node.acf.menu_items}/>
        ))
      }
      </div>
    </Transition>
  </div>
);

export default MenuType;
