import React from "react";

const Navbar = (props ) => {
    return (
      <div style={styles.nav}>
          <div style={styles.cartIconContainer}> 
           <img style={styles.cartIcon}src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart-icon"/>
           <span style={styles.cartCount}>{props.count}</span>
          </div>
      </div>
    );
  }

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative',
    marginRight: '15px',
    marginTop: '2px',
    padding: '5px 2px'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '3px 9px',
    position: 'absolute',
    right: 2,
    top: -9
  }
}



export default Navbar;
