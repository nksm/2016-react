import * as React from 'react';

import ItemList from './ItemList.js';
import Cart from './Cart.js';

const Container = () => {
  return (
    <main className="Container">
      <div className="ItemListArea">
        <h2>商品一覧</h2>
        <ItemList />
      </div>
      <div className="CartArea">
        <h4>カート</h4>
        <Cart />
        <div class="Total">
          計2点
          <span class="Total__price">1600円</span>
        </div>
      </div>
    </main>
  )
}

Container.propTypes = {}

export default Container;
