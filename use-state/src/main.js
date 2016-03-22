import * as React from 'react';
import * as ReactDOM from 'react-dom';

class StateComponent extends React.Component {
  constructor() {
    super();

    // 初期状態
    this.state = {
      target: 'CodeGrid'
    };
  }

  render() {
    let { target } = this.state;

    return (
      <div>Hello {target}!</div>
    );
  }
}

const $app = document.getElementById('app');
ReactDOM.render(<StateComponent />, $app);
