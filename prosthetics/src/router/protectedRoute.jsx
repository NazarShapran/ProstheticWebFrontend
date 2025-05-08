import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NotFoundPage from "../pages/404/notFoundPage";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const navigate = useNavigate();
  const userJson = localStorage.getItem("user");

  const user = userJson ? JSON.parse(userJson) : null;

  useEffect(() => {
    if (!user) {
      navigate("/signIn", { replace: true });
    }
  }, [user, navigate]);

  return (
    <>
      {allowedRoles?.includes(user?.role ?? "") ? children : <NotFoundPage />}
    </>
  );
};

export default ProtectedRoute;