import { Link } from 'react-router';
import useAuth, { IAuthStore } from '../store/auth.store';

export default function Header() {
  const onAuthChange = useAuth((state: IAuthStore) => state.onAuthChange);

  const onLogout = (): void => {
    onAuthChange(null);
  };

  return (
    <header className="container">
      <h1>Cart App</h1>
      <nav className="header__nav">
        <div className="header__nav-item">
          <Link to="/">Products</Link>
        </div>
        <div className="header__nav-item">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="header__nav-item">
          <div onClick={onLogout} className="header__nav-item__logout">
            Logout
          </div>
        </div>
      </nav>
    </header>
  );
}
