import * as React from 'react';
import * as ReactDOM from 'react-dom'; // ブラウザ = DOMに表示

// 表示するコンポーネント
class HelloComponent extends React.Component {
  render() {
    return <div>Hello React.js!</div>;
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <section>
        <h1>My Hello App!</h1>
        <HelloComponent />
      </section>
    );
    }
}

// 表示する先
const $app = document.getElementById('app');

// 表示！
ReactDOM.render(<AppComponent />, $app);
