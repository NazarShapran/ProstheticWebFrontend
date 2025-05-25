import { useState } from "react";
import { SignUpService } from "../service/signUpService";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (fullname, phoneNumber, email, password, birthDate) => {
    setError(null);
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await SignUpService.signUp(
        fullname,
        phoneNumber,
        email,
        password,
        birthDate,
        signal
      );
      console.log("Registration successful:", response);
      window.location.href = "/signin";
      return { success: true };
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.message || "Помилка реєстрації. Спробуйте ще раз.";
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
    handleRegister,
  };
};