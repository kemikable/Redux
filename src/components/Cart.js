// import React, { Component } from "react";
// import "../styles.css";

// import CartItem from './CartItem';
// import { connect } from "react-redux";



// class Cart extends Component {
//   getTotal() {
//     const { cartGoods } = this.props;


//     return cartGoods.reduce((acc, item) => acc + item.price, 0);
//   }

//   render() {
//     const { cartGoods } = this.props;
//     return (
//       <div className="cart">
//         <h2 className="cart__title">Shopping Cart</h2>
//         {cartGoods.length ?
//           <ul className="cart__list">
//             {cartGoods.map((item) => (
//               <li className="cart__list-item" key={item.id}>
//                 <CartItem {...item} />
//                 <li></li>
//               </li>
//             ))}
//           </ul>
//           :
//           <p className="cart__note">Nothing in the cart now</p>
//         }
//         <p className="cart__total">Total: {this.getTotal()}.00$</p>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   cartGoods: state.cart
// });

// export default connect(mapStateToProps)(Cart);




// import React, { Component } from "react";
// import "../styles.css";
// import CartItem from './CartItem';
// import { connect } from "react-redux";
// import { removeGoodFromCart } from "../redux/actions";

// class Cart extends Component {
//   getTotal() {
//     const { cartGoods } = this.props;
//     return cartGoods.reduce((acc, item) => acc + item.price, 0);
//   }

//   handleRemove = (id) => {
//     this.props.removeGoodFromCart(id);
//   };

//   render() {
//     const { cartGoods } = this.props;
//     return (
//       <div className="cart">
//         <h2 className="cart__title">Shopping Cart</h2>
//         {cartGoods.length ?
//           <ul className="cart__list">
//             {cartGoods.map((item) => (
//               <li className="cart__list-item" key={item.id}>
//                 <CartItem {...item} />
//                 <button className="goods-item__add-to-card" onClick={() => this.handleRemove(item.id)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//           :
//           <p className="cart__note">Nothing in the cart now</p>
//         }
//         <p className="cart__total">Total: {this.getTotal()}.00$</p>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   cartGoods: state.cart
// });

// const mapDispatchToProps = {
//   removeGoodFromCart
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);



import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeGoodFromCart } from "../redux/actions";
import CartItem from './CartItem';
import "../styles.css";

const Cart = () => {
  const cartGoods = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  };

  const handleRemove = (id) => {
    dispatch(removeGoodFromCart(id));
  };

  return (
    <div className="cart">
      <h2 className="cart__title">Shopping Cart</h2>
      {cartGoods.length ? (
        <ul className="cart__list">
          {cartGoods.map((item) => (
            <li className="cart__list-item" key={item.id}>
              <CartItem {...item} />
              <button className="goods-item__add-to-card" onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cart__note">Nothing in the cart now</p>
      )}
      <p className="cart__total">Total: {getTotal()}.00$</p>
    </div>
  );
};

export default Cart;
