import React from 'react';

import Header from './Header.jsx';
import Container from './Container.jsx';
import Footer from './Footer.jsx';

const App extend React.Component {
  render () {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    )
  }
}

export default App;
