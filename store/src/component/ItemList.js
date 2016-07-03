import React from 'react';

import Item from './Item.js';

const ItemList = () => {
  return (
    <ul className="ItemList">
      <li className="ItemList__item">
        <Item />
      </li>
    </ul>
  )
}

Item.propTypes = {}

export default ItemList;
