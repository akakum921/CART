import React from "react";
class CartItem extends React.Component {
  
  increaseQuantity = () => {
      // console.log('this',this.state);
      //set state form 1(giving an object)
      // this.setState({
      //   qty: this.state.qty + 1
      // },() => {});

      //set state form 2 => if prevState is required then use this
      this.setState((prevState) => {
         return {
           qty: prevState.qty + 1
         }
      }, () =>{
         console.log('this.state',this.state);
      });
  }
  
  decreaseQuantity = () => {
    const {qty} = this.state;

    if(qty === 0){
      return;
    }
    this.setState((prevState) => {
       return {
            qty: prevState.qty - 1
       }
    });
  }


  render() {
    // console.log('this.props', this.props);
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ fontSize: 25, color: "#777" }}>Rs {price}</div>
          <div style={{ fontSize: 25, color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/*buttons*/}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};
export default CartItem;
