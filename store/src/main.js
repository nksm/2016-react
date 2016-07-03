import React from 'react';
import ReactDOM from 'react-dom';

import { fetchItemModel } from './util';

import App from './component/App.jsx';

const App extends React.Component {
  render () {
    return (
      <App />
    )
  }
}

window.addEventListener('load', () => {
  // サーバーに商品リストをリクエストする関数
  fetchItemModel()
    .then((res) => {
      // レスポンスを `prop` に渡しつつ、アプリケーションを起動
      ReactDOM.render(
        <App listItems={res.data} />,
        document.getElementById('jsApp')
      );
    });
}, false);
