import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  increaseQuantity = () => {
      console.log('this',this.state);
  }
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{this.state.title}</div>
          <div style={{ fontSize: 25, color: "#777" }}>Rs {price}</div>
          <div style={{ fontSize: 25, color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/*buttons*/}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1644340379~hmac=b0c8a3044b47ef23a8cbea6c584901e5"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
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
