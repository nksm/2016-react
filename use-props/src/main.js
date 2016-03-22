import React from 'react';
import ReactDOM from 'react-dom';

class PropsComponent extends React.Component {
  render() {
    const { target } = this.props;

    return (
      <div>Hello {target}!</div>
    );
  }
}

const $app = document.getElementById('app');
ReactDOM.render(<PropsComponent target="CodeGrid" />, $app);
