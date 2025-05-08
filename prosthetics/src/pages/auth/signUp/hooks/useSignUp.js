import { useState } from "react";
import { SignUpService } from "../service/signUpService";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (fullname, phoneNumber, birthDate, email, password) => {
    setError(null);
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await SignUpService.signUp(
        fullname,
        phoneNumber,
        birthDate,
        email,
        password,
        signal
      );
      console.log("Registration successful:", response);
      window.location.href = "/signin";
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed. Please try again.");
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