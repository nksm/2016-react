import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = { v: 0 };
  }

  render() {
    return (
      <div>
        ボタンをクリックすると、`Math.random()`の結果をsetStateします。コンソールでそれぞれのタイミングで発火されるイベントを確認できます。
        <hr />
        {this.state.v}
        <hr />
        <button onClick={ () => { this.setState({ v: Math.random() }); } }>setState()</button>
      </div>
    );
  }

  componentWillMount() { console.log('componentWillMount'); }
  componentDidMount() { console.log('componentDidMount'); }
  componentWillReceiveProps() { console.log('componentWillReceiveProps'); }
  componentWillUpdate() { console.log('componentWillUpdate'); }
  componentDidUpdate() { console.log('componentDidUpdate'); }
  componentWillUnmount() { console.log('componentWillUnmount'); }
  shouldComponentUpdate() { console.log('shouldComponentUpdate'); return true; }
}

// 表示する先
const $app = document.getElementById('app');

// 表示！
ReactDOM.render(<App />, $app);
