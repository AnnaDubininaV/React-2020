import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selectors';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart,item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandrel = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="cart-empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandrel}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
