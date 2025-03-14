import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProtectedRoute from './hooks/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Login />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
