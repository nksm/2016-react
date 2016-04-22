import React from 'react';
import ReactDOM from 'react-dom';

import { fetchItemModel } from './util';
import App from './component/App.jsx';

window.addEventListener('load', () => {

  // サーバーに商品リストをリクエスト
  fetchItemModel()
    .then((res) => {
        // そのレスポンスを`props`に渡しつつ、アプリケーションを起動
      ReactDOM.render(
        <App listItems={res.data} />,
        document.getElementById('jsApp')
      );
    });

}, false);
