import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    const { isBirthday } = this.props;

    return (
      <div>
        { (isBirthday) ? 'Happy birthday!!' : 'Hello, how are you?' }
      </div>
    );
  }
}

Greeting.propTypes = {
  isBirthday: React.PropTypes.bool
};

// 表示する先
const $app = document.getElementById('app');

// 表示！
ReactDOM.render(<Greeting isBirthday="false" />, $app);
