import useCart, { ICartStore } from '../../store/cart.store';
import Header from '../Header';
import CartList from './cart-list';

export default function Index() {
  const { cart } = useCart((state: ICartStore) => state);
  return (
    <>
      <Header />
      <main className="container">
        <h2>Cart List</h2>
        {cart.length > 0 ? (
          <CartList />
        ) : (
          <p className="empty-cart">
            Your cart is empty. Please add items in the product list.
          </p>
        )}
      </main>
    </>
  );
}
