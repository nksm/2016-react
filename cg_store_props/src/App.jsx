import React from 'react';

import Header from './component/Header.jsx';
import Container from './component/Container.jsx';
import Footer from './component/Footer.jsx';

class App extends React.Component {
  render() {
    const { listItems } = this.props;

    return (
      <div>
        <Header />
        <Container listItems={listItems} />
        <Footer />
      </div>
    );
  }
}

export default App;
