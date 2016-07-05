import React from 'react';

import Header from './Header.jsx';
import Container from './Container.jsx';
import Footer from './Footer.jsx';

const App extend React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: []
    }
  }

  _addToCart(item) {
    let newCartItems = this.state.cartItems.slice();
    newCartItems.push(item);

    this.setState({ cartItems: newCartItems });
  }

  _removeItem(item) {
    let newCartItems = this.state.cartItems.slice();
    newCartItems.splice(idx, 1);

    this.setState({ cartItems: newCartItems });
  }

  render () {
    const { listItems } = this.props;
    const { cartItems } = this.state;
    return (
      <div>
        <Header />
        <Container
          listItems = {listItems}
          cartItems = {cartItems}
          addToCart = {this._addToCart}
          removeItem = {this._removeItem}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
