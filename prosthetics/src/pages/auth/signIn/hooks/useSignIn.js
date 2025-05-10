import { useState, useEffect } from "react";
import { SignInService } from "../service/signInService";
import { jwtDecode } from "jwt-decode";

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (email, password) => {
    setError(null);
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await SignInService.signIn(email, password, signal);
      let decoded = jwtDecode(response);
      localStorage.setItem("token", response);
      localStorage.setItem("user", JSON.stringify(decoded));
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Неправильна електронна пошта або пароль.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return {
    loading,
    error,
    handleSubmit,
  };
};
