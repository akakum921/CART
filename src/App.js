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
                img: '',
                id: 1
              },
              {
                price: 500,
                title: "Watch",
                qty: 15,
                img: '',
                id: 2,
              },
              {
                price: 600,
                title: "Television",
                qty: 4,
                img: '',
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
      </div>
    );
  }
}

export default App;
