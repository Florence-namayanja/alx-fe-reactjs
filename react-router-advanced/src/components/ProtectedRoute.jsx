import { Navigate } from "react-router-dom";

// ✅ define useAuth directly here
function useAuth() {
  const isAuthenticated = true; // change to false to test redirect
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ using useAuth

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
