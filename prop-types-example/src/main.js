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

class ScoreboardCompoent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 管理者の場合も skip
    if (this.props.isAdmin) { return false; }
    // score の状態が一緒なら更新を skip
    if (this.state.score === nextState.score) { return false; }
    // クリアしてても skip
    if (nextProps.isCleared) { return false; }
    // それ以外は更新する
    return true;
  }
  // shouldComponentUpdate で false を返すと続く componentWillUpdate / componentDidUpdate のイベントは白化しない
  // 更新する必要がない条件がわかっている場合は、描画を間引きパフォーマンスを向上させる
  // このイベントを定義しなかった場合は、デフォルトでtrueが返るようになっており、このコンポーネントが更新される。
}


// 唯一の引数として props を受け取り、コンポーネントを返す関数を定義する
const Greeting = ({ isBirthday }) => {
  return (
    <div>
      { (isBirthday) ? 'HappyBirthDay!' : 'Hello, how are you?' }
    </div>
  );
}

Greeting.propTypes = {
  isBirthday: React.PropTypes.bool
}

Greeting.defaultProps = {
  isBirthday: true
}


// 表示する先
const $app = document.getElementById('app');

// 表示！
ReactDOM.render(<Greeting isBirthday="false" />, $app);
