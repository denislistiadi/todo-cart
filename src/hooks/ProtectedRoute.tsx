import { Navigate } from 'react-router';
import useAuth, { IAuthStore } from '../store/auth.store';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth((state: IAuthStore) => state.auth);

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
