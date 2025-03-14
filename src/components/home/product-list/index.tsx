import { useGetProducts } from '../../../services/productsApi.service';
import useCart, { ICartStore } from '../../../store/cart.store';
import { IProduct } from '../../../types/products.types';
import Button from '../../Button';
import './style.css';

export default function ProductList() {
  const { data } = useGetProducts();

  const { cart, addToCart, removeFromCart } = useCart(
    (state: ICartStore) => state
  );

  const onCartAvailable = (product: IProduct) => {
    if (cart.some((item) => item.id === product.id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ul className="product-list">
      {data?.products.map((product: IProduct) => (
        <li key={product.id}>
          <div className="product-image">
            <img src={product.images[0]} alt={product.title} />
          </div>
          <div className="product-details">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>

          <div className="product-actions">
            {onCartAvailable(product) ? (
              <Button
                buttonClass="remove-button"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from Cart
              </Button>
            ) : (
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
