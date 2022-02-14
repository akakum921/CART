import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: "Mobile Phone",
                qty: 1,
                img: 'https://img.tatacliq.com/images/i7/437Wx649H/MP000000010632207_437Wx649H_202109171909501.jpeg',
                id: 1
              },
              {
                price: 500,
                title: "Watch",
                qty: 15,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                id: 2,
              },
              {
                price: 600,
                title: "Television",
                qty: 4,
                img: 'https://m.media-amazon.com/images/I/71p-UL5MjdL._SL1500_.jpg',
                id: 3
              }
        ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  handleIncreaseQuantity = (product) => {
      // console.log('Hey',product);
      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;
      this.setState({
        products
      })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    
    if(products[index].qty === 0){
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); //[{}] return an array of items not equal to passesd id
    this.setState({
      products: items
    })
  }
  getCartCount = () =>{
    const { products } = this.state;
    
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () =>{
    const { products } = this.state;
    
    let cartTotal = 0;

    products.map((product) => {
      if(product.qty >0) {
        cartTotal += product.price * product.qty;
      }
      return '';
    });
    
    return cartTotal;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()} 
        />
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />

        <div style = { { fontSize: 20,padding: 10}}>TOTAL: {this.getCartTotal()}</div>
      </div>

    );
  }
}

export default App;
