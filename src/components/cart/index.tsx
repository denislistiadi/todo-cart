import Header from '../Header';
import CartList from './cart-list';

export default function Index() {
  return (
    <>
      <Header />
      <main className="container">
        <h2>Cart List</h2>
        <CartList />
      </main>
    </>
  );
}
