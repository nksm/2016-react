import React from 'react';
import ReactDOM from 'react-dom'; // ブラウザ = DOMに表示

// 表示するコンポーネント
class HelloComponent extends React.Component {
  render() {
    return <div>Hello React.js!</div>;
  }
}

class PropsComponent extends React.Component {
  render() {
    const { target } = this.props;
    return (
      <div>Hello {target}!</div>
    );
  }
}

class StateComponent extends React.Component {
  constructor() {
    super();
    //初期状態
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

class TextInputComponent extends React.Component {
  constructor() {
    super();

    // 入力された内容を保持しておく state
    this.state = {
      val: 'CodeGrid'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // input 要素の change イベントの度に呼ばれるハンドラ
  handleInputChange(ev) {
    this.setState({
      val: ev.target.value
    });
  }

  // button 要素の click イベントに対応
  handleButtonClick() {
    this.setState({
      val: ''
    });
  }

  render() {
    let { val } = this.state;

    return(
      <div>
        <input type="text" onChange={this.handleInputChange} value={val} />
        <button type="button" onClick={this.handleButtonClick}>Clear</button>
        <hr />
        {val}
      </div>
    );
  }
}


// 表示するコンポーネント2
class AppComponent extends React.Component {
  render() {
    return (
      <section>
        <h1>Hello App!</h1>
        <HelloComponent></HelloComponent>
        <PropsComponent target="CodeGrid"></PropsComponent>
        <StateComponent></StateComponent>
      </section>
    );
  }
}

// 表示する先
const $app = document.getElementById('app');

// 表示
ReactDOM.render(<AppComponent />, $app);
