import Header from '../Header';
import ProductList from './product-list';

export default function Index() {
  return (
    <>
      <Header />
      <main className="container">
        <h2>Product List</h2>
        <ProductList />
      </main>
    </>
  );
}
