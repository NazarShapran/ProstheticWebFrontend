import { useState } from "react";
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
      return { success: true };
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.message || "Неправильна електронна пошта або пароль";
      setError(errorMessage);
      return { 
        success: false, 
        error: errorMessage 
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleSubmit,
  };
};
