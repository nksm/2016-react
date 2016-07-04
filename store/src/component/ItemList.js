import React from 'react';

import Item from './Item.js';

const ItemList = (props) => {
  const {
    items,
    addToCart
  } = props;
  let Content;
  Content = items.map((item, idx) => {
    return (
      <li
        className="ItemList__item"
        key={idx}
      >
        <Item
          {...item}
          onClickBtn={() => { addToCart(item); }}
        />
      </li>
    );
  })
  return (
    <ul className="ItemList">
      {Content}
    </ul>
  )
}

Item.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  addToCart: React.PropTypes.func.isRequired,
}

export default ItemList;
