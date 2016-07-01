import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Container from './Container.jsx';
import Footer from './Footer.jsx';

const App extends React.Component {
  render (
    <Header />
    <Container />
    <Footer />
  );
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

// 表示する先
const $app = document.getElementById('app');

// 表示！
ReactDOM.render(<App />, $app);
