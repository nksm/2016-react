import React from 'react';
import ReactDOM from 'react-dom';

class SampleComponent extends React.Component {
  render() {
    return (
      <div>
        This article is written by leader22
      </div>
    );
  }
}

ReactDOM.render(<SampleComponent />, document.getElementById('jsApp'));
