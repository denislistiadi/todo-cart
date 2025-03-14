import useCart, { ICartStore } from '../../../store/cart.store';
import Button from '../../Button';
import './style.css';

export default function Index() {
  const { cart, removeFromCart } = useCart((state: ICartStore) => state);
  return (
    <ul className="cart-list">
      {cart.map((item) => (
        <li key={item.id}>
          <p>
            {item.title} - ${item.price}
          </p>
          <Button
            buttonClass="remove-button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
}
